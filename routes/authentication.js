const express = require("express");
const router = express.Router();

const { getCollection } = require("../src/mongo");
const { ObjectId } = require("mongodb").ObjectID;

const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  if (req.body.username === undefined || req.body.password === undefined) {
    return res.sendStatus(400);
  }
  try {
    let query;
    if (req.body.username.indexOf("@") > 0) {
      query = { email: req.body.username };
    } else {
      query = { username: req.body.username };
    }
    const collection = await getCollection("Users");
    const resFind = await collection.find(query).toArray();
    if (resFind.length === 0) {
      return res.sendStatus(404);
    }
    for (let user of resFind) {
      const hash = user.password;
      const match = await bcrypt.compare(req.body.password, hash);
      if (match) {
        req.session._id = user._id;
        req.session.username = user.username;
        req.session.avatar = user.avatar;
        if (req.body.checked) {
          res.cookie("_id", user._id, {
            maxAge: 1000 * 60 * 60 * 24 * 7,
          }); // 1 day
        } else {
          res.cookie("_id", user._id);
        }
        return res.sendStatus(200);
      }
    }
    res.status(404).send("Username and password do not match");
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

router.post("/signup", async (req, res) => {
  if (req.body.email === undefined || req.body.password === undefined) {
    return res.sendStatus(400);
  }
  try {
    const resFind = await getCollection("Users")
      .findOne({
        email: req.body.email,
      });
    if (resFind) {
      return res.status(409).send("This email address has been registered");
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    const data = {
      email: req.body.email,
      username: req.body.email,
      password: hash,
      balance: 500,
      categories: {
        Income: ["Salary", "Transfer", "Stock"],
        Expense: [
          "Grocery",
          "Health",
          "Outdoors",
          "Computers",
          "Sports",
          "Games",
        ],
      },
      budget: {
        "Grocery" : 1000,
      },
      avatar: 0,
      biography: "LifeStyle",
    };
    const result = await getCollection("Users").insertOne(data);
    const insertedId = result.insertedId.toString();
    
    const fake_categories = ["Grocery", "Health", "Outdoors", "Sports", "Games"];
    const fake_merchant = ["Stracke LLC", "Murazik-Kirlin", "Cummerata-Miller", "Cummerata-Ritchie", "Rolfson"];
    for (let i = 0; i < 5; i++) {
      const fake_data = {
        user_id: insertedId,
        category: fake_categories[i],
        merchant: fake_merchant[i],
        date: Date.now() - i * 86400000,
        remark: "",
        amount: 100,
        type: "Expense",
      };
      await getCollection("Transactions").insertOne(fake_data);
    }
    await getCollection("Transactions").insertOne({
      user_id: insertedId,
      category: "Salary",
      merchant: "MoneyThings",
      date: Date.now() - 5 * 86400000,
      remark: "",
      amount: 1000,
      type: "Income",
    });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(400);
  }
});

router.get("/get-user", async (req, res) => {
  if (req.session.user === undefined) {
    // once the browser has the cookie, the log status stays valid
    if (req.cookies._id === undefined) {
      return res.sendStatus(204);
    }
    try {
      const collection = await getCollection("Users");
      const user = await collection.findOne(
        { _id: ObjectId(req.cookies._id) },
        { projection: { _id: 0, password: 0 } }
      );
      if (user === null) {
        res.sendStatus(204);
      } else {
        req.session._id = req.cookies._id;
        req.session.user = user;
        res.send(user);
      }
    } catch (err) {
      console.log("Error", err);
      res.sendStatus(400);
    }
  } else {
    res.send(req.session.user);
  }
});

module.exports = router;

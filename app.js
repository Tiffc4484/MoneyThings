const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");

require("dotenv").config();

const authRouter = require("./routes/authentication");
const userRouter = require("./routes/user");
const transactionRouter = require("./routes/transaction");

const app = express();

/**
 * enforce https link
 */
const env = process.env.NODE_ENV || "development";
if (env === "production") {
  app.enable("trust proxy");
  app.use(function (req, res, next) {
    if (req.header("x-forwarded-proto") !== "https") {
      res.redirect("https://" + req.header("host") + req.url);
    } else {
      next();
    }
  });
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "MoneyThings",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
    expires: new Date(Date.now() + 30 * 86400 * 1000),
  })
);

app.use("/authentication", authRouter);
app.use("/user", userRouter);
app.use("/transaction", transactionRouter);

app.use(express.static(path.join(__dirname, "frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/build/index.html"));
});

module.exports = app;

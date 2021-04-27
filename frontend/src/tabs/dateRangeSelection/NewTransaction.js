import React, { useEffect, useState, useRef } from "react";
import InputBox from "../../shared/InputBox.js";
import propTypes from "prop-types";
import DateTimePicker from "react-datetime-picker";
import _ from "lodash";
import CategoryWrapper from "./CategoryWrapper";

export default function NewTransaction(props) {
  const [isIncome, setIsIncome] = useState(true);
  const [merchant, setMerchant] = useState("");
  const [amount, setAmount] = useState("");
  const [categories, setCategories] = useState(props.user.categories.Income);
  const [category, setCategory] = useState(props.user.categories.Income[0]);
  const [remark, setRemark] = useState("");
  const [date, setDate] = useState(new Date());
  const modal_trigger = useRef();

  useEffect(() => {
    if (isIncome) {
      setCategory(props.user.categories.Income[0]);
    } else {
      setCategory(props.user.categories.Expense[0]);
    }
  }, [props.user, isIncome]);

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!evt.target.checkValidity()) {
      return evt.target.classList.add("was-validated");
    }
    const data = {
      type: isIncome ? "Income" : "Expense",
      category: category,
      merchant: merchant,
      amount: amount,
      date: date.getTime(),
      remark: remark,
    };
    fetch("/transaction/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resRaw) => {
        if (!resRaw.ok) {
          resRaw.text().then((res) => {
            alert(res);
          });
        } else {
          const newDateRange = _.cloneDeep(props.dateRange);
          newDateRange[1] = new Date();
          props.setDateRange(newDateRange);
          props.toggle();
          props.refreshPage((prev) => !prev);
          console.log("New transaction created");
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  function notIsIncome(flag) {
    setIsIncome(flag);
    setCategories(
      flag ? props.user.categories.Income : props.user.categories.Expense
    );
  }

  function handleCategorySelection(evt) {
    if (evt.target.value !== "AddNewCategory_") {
      return setCategory(evt.target.value);
    } else {
      modal_trigger.current.click();
    }
  }

  return (
    <div className="flex-container">
      <form
        onSubmit={handleSubmit}
        className="flex-container d-flex flex-column"
      >
        <div className="row py-3 text-center btn-group mx-3" role="group">
          <button
            className="col-3 border-end btn btn-secondary"
            onClick={props.toggle}
          >
            Cancel
          </button>

          <button
            className="col-3 border-end btn btn-secondary"
            onClick={(evt) => {
              evt.preventDefault();
              notIsIncome(true);
            }}
            style={{
              textDecoration: isIncome ? "underline" : "none",
            }}
          >
            Income
          </button>
          <button
            className="col-3 border-end btn btn-secondary"
            onClick={(evt) => {
              evt.preventDefault();
              notIsIncome(false);
            }}
            style={{ textDecoration: isIncome ? "none" : "underline" }}
          >
            Expense
          </button>
          <button className="col-3 btn btn-secondary">Save</button>
        </div>
        <div className="text-center my-3">
          <DateTimePicker
            onChange={setDate}
            value={date}
            clearIcon={null}
            calendarAriaLabel="new_calendar_select"
            dayAriaLabel="new_day_select"
            monthAriaLabel="new_month_select"
            nativeInputAriaLabel="new_input_select"
            yearAriaLabel="new_year_select"
          />
        </div>
        <div className="my-3">
          <div>
            <label className="form-label" htmlFor="select">
              Category
            </label>
          </div>
          <select
            id="select"
            value={category}
            onChange={handleCategorySelection}
            style={{ width: "100%", height: "3rem" }}
          >
            {categories.map((item, index) => (
              <option value={item} key={"option-" + index}>
                {item}
              </option>
            ))}
            <option value="AddNewCategory_">... Add a new category</option>
          </select>
        </div>
        <InputBox
          label="Merchant name"
          value={merchant}
          onChange={(evt) => setMerchant(evt.target.value)}
          required={true}
          feedback="Please enter the merchant name"
        />
        <InputBox
          label="Amount"
          value={amount}
          type="number"
          onChange={(evt) => setAmount(evt.target.value)}
          required={true}
        />
        <div className="form-floating mt-3 mb-5 flex-grow-1">
          <textarea
            id="remark"
            value={remark}
            className="form-control"
            placeholder="textarea"
            onChange={(evt) => setRemark(evt.target.value)}
            style={{ height: "100%" }}
          />
          <label htmlFor="remark">Remark</label>
        </div>
      </form>
      <div
        data-bs-toggle="modal"
        data-bs-target="#new_category_modal"
        ref={modal_trigger}
      />
      <CategoryWrapper user={props.user} refreshPage={props.refreshPage} />
    </div>
  );
}

NewTransaction.propTypes = {
  user: propTypes.object.isRequired,
  refreshPage: propTypes.func.isRequired,
  toggle: propTypes.func.isRequired,
  dateRange: propTypes.array.isRequired,
  setDateRange: propTypes.func.isRequired,
};

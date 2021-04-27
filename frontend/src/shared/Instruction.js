import React from "react";

export default function Instruction() {
  return (
    <div
      className="modal fade"
      id="instruction_modal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title fw-bold fs-5" id="exampleModalLabel">
              Instruction
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="fw-bold">Overview</div>
            <div className="mb-3">
              This page serves as a dashboard for a quick overview of all your
              information.
              <br />
              You can find your most recent transactions, expense/income
              analysis, as well as expense usage information here. Scroll into
              any sub-module for more information.
              <br />
              We provide some dummy data for those newcomers. You are free to
              delete them after you get used to MoneyThings.
            </div>
            <div className="fw-bold">Selection Panel</div>
            <div className="mb-3">
              On the left side of any tab except the overview, there is the
              selection panel, in which there displays the recent transactions
              of given date range. And quick shortcuts are provided in the all
              time tab.
              <br />
              On clicking the Add + button on the right top, you are able to add
              a new transaction. It is possible to customize your own categories
              if you click the Add A New Category option.
            </div>
            <div className="fw-bold">All Time</div>
            <div className="mb-3">
              The right section displays transactions with remarks grouped by
              either a single date or category. You can easily toggle between
              them by clicking the switch on the top of the section.
              <br />
              Detailed transactions are collapsed by default. And it will not
              display if there is not any transactions on this date/in this
              category
            </div>
            <div className="fw-bold">Trend</div>
            <div className="mb-3">
              It is of great accessibility for any users that the default data
              visualization is implemented by simply different colors. And for
              those who are interested in more fancy effects, we make it easy
              for you to understand your income/expense through pie chart and
              line graph.
              <br />
              By clicking different buttons on the top, you get easy access to
              different types of visualization.
            </div>
            <div className="fw-bold">Budget</div>
            <div className="mb-3">
              Set your monthly budgets for better saving money. Be really
              careful if your budget of the category turns red!
              <br />
              Note that you are only able to set the budget for current month.
              But you can still check the budgets of previous months.
            </div>
            <div className="fw-bold">Account</div>
            <div className="mb-3">
              Here we provide several fields to let you take control of your
              account.
              <br />
              In the profile tab you might update your account information
              including avatar, password, and biography by clicking the field to
              edit. Do not forget to click the submit button at the right
              bottom.
              <br />
              In the new password tab you are able to update your password. You
              will be alerted if the passwords are inconsistent.
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-custom"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

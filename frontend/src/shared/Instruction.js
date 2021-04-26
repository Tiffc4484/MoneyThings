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
              You can find your most recent transactions, expense/income
              analysis, as well as expense usage information here.
            </div>
            <div className="fw-bold">All Time</div>
            <div className="mb-3">
              Add a new transaction on the selection panel. The left section
              allows you to retrieve transactions within a certain date range.
              The right section displays transactions with remarks grouped by
              either a single date or category.
            </div>
            <div className="fw-bold">Trend</div>
            <div className="mb-3">
              We make it easy for you to understand your income/expense through
              pie chart and line graph.
            </div>
            <div className="fw-bold">Budget</div>
            <div className="mb-3">
              Set your monthly budgets for better saving money.
            </div>
            <div className="fw-bold">Account</div>
            <div className="mb-3">
              Reset your account information including avatar, password, and
              biography.
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

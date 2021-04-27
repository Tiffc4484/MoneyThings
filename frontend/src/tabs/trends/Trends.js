import React, { useState } from "react";
import propTypes from "prop-types";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import PlainTable from "./PlainTable";
import Charts from "./Charts";

export default function Trends(props) {
  const [content, setContent] = useState("table");
  
  return (
    <div className="flex-container">
      <div style={{ height: "calc(100vh - 6rem)" }} className="pt-3">
        <div className="d-flex justify-content-center me-2 mb-4 mt-3">
          <ButtonGroup>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setContent("table");
              }}
            >
              Show Plain Table
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setContent("expense");
              }}
            >
              Show Expense Category Pie
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setContent("income");
              }}
            >
              Show Income Category Pie
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                setContent("dateGroup");
              }}
            >
              Show Daily Line Chart
            </button>
          </ButtonGroup>
        </div>
        <div className="hide-scroll" style={{backgroundColor: "white", height: "80vh", overflowY: "scroll"}} tabIndex="0">
          {content === "table" ? (
            <PlainTable {...props} />
          ) : (
            <Charts {...props} content={content} />
          )}
        </div>
      </div>
    </div>
  );
}

Trends.propTypes = {
  income: propTypes.object.isRequired,
  expense: propTypes.object.isRequired,
  dateGroup: propTypes.object.isRequired,
};

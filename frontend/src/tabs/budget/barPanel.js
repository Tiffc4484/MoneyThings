import React from "react";
//import ProgressBar from "react-bootstrap/ProgressBar";
import propTypes from "prop-types";

export default function BarPanel(props) {
  function getVariant(ratio) {
    if (ratio < 25) {
      return "info";
    }
    if (ratio < 50) {
      return "success";
    }
    if (ratio < 75) {
      return "primary";
    }
    if (ratio < 100) {
      return "warning";
    }
    return "danger";
  }

  return (
    <div className="ProgessBar flex-column align-items-center .ml-1">
      {props.barData.map((item, index) => {
        return (
          <div
            key={item.category + index}
            style={{ padding: "5px", width: "70%", margin: "0 auto" }}
          >
            {item.category}
            <div className="progress">
              <div
                className={
                  "progress-bar bg-" +
                  getVariant(item.ratio)
                }
                role="progressbar"
                aria-label={"budget progess " + index}
                style={{ width: item.ratio + "%" }}
                aria-valuenow={item.amount.toFixed(2)}
                aria-valuemin="0"
                aria-valuemax={item.budget}
              >{`${item.ratio}%`}</div>
            </div>

            {`$${item.amount.toFixed(2)} of $${item.budget}`}
            <span style={{ float: "right" }}>
              {item.left > 0
                ? `${item.left.toFixed(2)} left`
                : `${Math.abs(item.left).toFixed(2)} Over`}
            </span>
          </div>
        );
      })}
    </div>
  );
}

BarPanel.propTypes = {
  barData: propTypes.array.isRequired,
};

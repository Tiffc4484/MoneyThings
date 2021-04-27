import React from "react";
import propTypes from "prop-types";
import LineChartModule from "../../shared/LineChartModule";
import MyPie from "../../shared/Pie";

export default function Charts(props) {
  function typeData(type) {
    if (Object.keys(type).length === 0) return [];
    const data = [];
    Object.keys(type).map((item) => {
      const object = {};
      const r = (Math.random() * 255).toFixed(0);
      const g = (Math.random() * 255).toFixed(0);
      const b = (Math.random() * 255).toFixed(0);
      let value = 0;
      type[item].map((item) => {
        value += item.amount;
      });

      object["value"] = parseFloat(value).toFixed(2);
      object["id"] = item;
      object["label"] = item;
      object["color"] = `rgb(${r}, ${g}, ${b})`;
      data.push(object);
    });
    return data;
  }

  return (
    <div
      className="d-flex justify-content-center me-2"
      style={{ height: "80%" }}
    >
      <div className="flex-container" style={{ width: "90%" }}>
        {props.content === "dateGroup" ? (
          <LineChartModule data={props.dateGroup} />
        ) : (
          <MyPie data={typeData(props[props.content])} />
        )}
      </div>
    </div>
  );
}

Charts.propTypes = {
  dateGroup: propTypes.object.isRequired,
  content: propTypes.string.isRequired,
};

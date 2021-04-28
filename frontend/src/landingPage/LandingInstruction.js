import React from "react";
import propTypes from "prop-types";

export default function LandingInstruction(props) {
  return (
    <div className="row mb-3">
      <div className="col-4">
        <div className="ratio ratio-1x1">
          <img className="p-4" src={props.url} alt="instruction" />
        </div>
      </div>
      <div className="col-8 align-self-center">
        <div className="fs-2 mb-2">{props.tab}</div>
        <div>{props.text}</div>
      </div>
    </div>
  );
}

LandingInstruction.propTypes = {
  url: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  tab: propTypes.string.isRequired,
};

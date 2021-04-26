import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import propTypes from "prop-types";

export default function ProfileModule(props) {
  const [balanceVisibility, setBalanceVisibility] = useState(false);

  function getTime() {
    const hour = new Date().getHours();
    if (hour > 17) {
      return "Evening";
    } else if (hour > 11) {
      return "Afternoon";
    } else if (hour > 5) {
      return "Morning";
    } else {
      return "Night";
    }
  }

  function toggleBalance() {
    setBalanceVisibility(!balanceVisibility);
  }

  return (
    <div className="flex-container border d-flex flex-column">
      <div
        className="overview-item border-bottom py-2 px-3 fw-bold text-black"
        style={{ fontFamily: "Halant serif" }}
      >
        Profile
      </div>
      <div className="d-flex flex-grow-1">
        <div className="row mx-3 align-self-center">
          <div className="col-4 px-0">
            <div className="ratio ratio-1x1">
              <img
                src={`../images/avatar/${props.user.avatar}.png`}
                alt="avatar"
              />
            </div>
          </div>
          <div className="col-8 align-self-center">
            <h2 className="mb-3 fs-4">
              Good {getTime()}, {props.user.username}
            </h2>
            <h3 className="d-flex me-4 fs-5">
              <div className="align-self-center">
                Your Balance:{" "}
                {balanceVisibility
                  ? parseFloat(props.user.balance).toFixed(2)
                  : "*"}
              </div>
              <button className="btn ms-auto fs-5" onClick={toggleBalance} aria-label="balance-visibility">
                {balanceVisibility ? (
                  <FontAwesomeIcon icon={["far", "eye-slash"]} />
                ) : (
                  <FontAwesomeIcon icon={["far", "eye"]} />
                )}
              </button>
            </h3>
          </div>
          <div className="fw-lighter mb-1 mt-4">Biography</div>
          <h4 className="fst-italic">{props.user.biography}</h4>
        </div>
      </div>
    </div>
  );
}

ProfileModule.propTypes = {
  user: propTypes.object.isRequired,
};

import React, { useState } from "react";
import "../../stylesheets/SelectionPanel.css";
import NewTransaction from "./NewTransaction";
import RecentTransaction from "./RecentTransaction";
import propTypes from "prop-types";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SelectionPanel(props) {
  const [showNewTrans, setShowNewTrans] = useState(false);

  function toggleSelectionPanelContent() {
    setShowNewTrans(!showNewTrans);
  }

  return (
    <div className="border-end flex-container d-flex flex-column">
      <div
        className="text-center border-bottom py-3 position-relative"
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          backgroundColor: "rgba(255,236,103, 0.3)",
        }}
      >
        Recent Transactions
        {showNewTrans ? null : (
          <div
            className="position-absolute top-50 translate-middle-y new-btn d-flex"
            onClick={toggleSelectionPanelContent}
          >
            <div className="me-1">Add</div>
            <div className="align-self-center">
              <i className="fas fa-plus-square"/>
            </div>
          </div>
        )}
      </div>
      <div className="flex-grow-1" id="panel_content">
        {showNewTrans ? (
          <NewTransaction
            user={props.user}
            refreshPage={props.refreshPage}
            toggle={toggleSelectionPanelContent}
            dateRange={props.dateRange}
            setDateRange={props.setDateRange}
          />
        ) : (
          <RecentTransaction
            refreshPage={props.refreshPage}
            dateRange={props.dateRange}
            setDateRange={props.setDateRange}
            recent={props.recent}
            setRecent={props.setRecent}
          />
        )}
      </div>
    </div>
  );
}

SelectionPanel.propTypes = {
  user: propTypes.object.isRequired,
  refreshPage: propTypes.func.isRequired,
  dateRange: propTypes.array.isRequired,
  setDateRange: propTypes.func.isRequired,
  recent: propTypes.array.isRequired,
  setRecent: propTypes.func.isRequired,
};

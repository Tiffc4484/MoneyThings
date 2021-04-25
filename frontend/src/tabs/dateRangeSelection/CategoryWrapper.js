import React from "react";
import propTypes from "prop-types";
import Categories from "./Categories";

export default function CategoryWrapper(props) {
  return (
    <div
      className="modal fade"
      id="new_category_modal"
      tabIndex="-1"
      aria-labelledby="new_category_modal_label"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="new_category_modal_label">
              Add New Category
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <Categories {...props} />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

CategoryWrapper.propTypes = {
  user: propTypes.object.isRequired,
  refreshPage: propTypes.func.isRequired,
};

import React from "react";
import "../stylesheets/landing.css";

export default function Landing() {
  return (
    <div>
      <div className="page-header gradient">
        <div className="container pt-3">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <h2>Your financial management is in good hands</h2>
              <p>
                Let’s sort us money affairs together, the more we get to know
                you is more you can earn
              </p>
            </div>
            <div className="col-md-6">
              <img src={"../images/pngegg.png"} alt="pig image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

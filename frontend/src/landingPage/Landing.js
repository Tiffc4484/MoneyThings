import React from "react";
import "../stylesheets/landing.css";

export default function Landing() {
  return (
    <div>
      <div className="page-header gradient">
        <div className="container pt-3">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-5">
              <h2>Your financial management is in good hands</h2>
              <p>
                Let’s sort us money affairs together, the more we get to know
                you is more you can earn
              </p>
              <button type="button" className="btn btn-outline-primary btn-lg">
                Getting Started
              </button>
            </div>
            <div className="col-md-5 pt-3">
              <img src={"../images/pngegg.png"} height="500" alt="pig image" />
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffec67"
          fillOpacity="1"
          d="M0,192L26.7,176C53.3,160,107,128,160,133.3C213.3,139,267,181,320,208C373.3,235,427,245,480,229.3C533.3,213,587,171,640,176C693.3,181,747,235,800,218.7C853.3,203,907,117,960,85.3C1013.3,53,1067,75,1120,112C1173.3,149,1227,203,1280,213.3C1333.3,224,1387,192,1413,176L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
      <div className="intro">
        <div className="row justify-content-center">
          <div className="col-md-6 justify-content-center">
            <h2>What can you do with</h2>
            <h2>MoneyThings</h2>
          </div>
        </div>
      </div>

      <div className="icons">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-2">
              <div className="icon mb-4">
                <h3>Overview</h3>
                <p>Overview all your account summaries in just one page</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="icon mb-4">
                <h3>All Time</h3>
                <p>Unlock your account details and explore more</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="icon mb-4">
                <h3>Trend</h3>
                <p>Make your life easier with data visualization</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="icon mb-4">
                <h3>Budget</h3>
                <p>Set a goal to manage your expenses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/landing.css";
import propTypes from "prop-types";
import LandingInstruction from "./LandingInstruction";

export default function Landing(props) {
  const link = props.user ? "/overview" : "/auth";

  const url_array = [
    "../images/instructions/0-balance.gif",
    "../images/instructions/1-scroll.gif",
    "../images/instructions/2-daterange.gif",
    "../images/instructions/3-shortcut.gif",
    "../images/instructions/4-add.gif",
    "../images/instructions/5-group.gif",
    "../images/instructions/6-charts.gif",
    "../images/instructions/7-budget.gif",
    "../images/instructions/8-profile.gif",
  ];

  const text_array = [
    "Click the button to toggle visibility of your balance",
    "Scroll into a sub-module to see more details",
    "Choose a date range to fetch transactions",
    "We also provide some shortcuts for date range selection",
    "Click the right top Add Button to add a new transaction",
    "Toggle between group by category/view by switching",
    "We provide different types of visualization",
    "Set your budget of current month",
    "Manage your account information yourself",
  ];

  const tab_array = [
    "Overview",
    "Overview",
    "All Time",
    "All Time",
    "All Time",
    "All Time",
    "Trends",
    "Budget",
    "Account",
  ];

  return (
    <div
      className="hide-scroll"
      style={{ height: "180vh", overflowY: "scroll", overflowX: "hidden" }}
    >
      <div>
        <div className="page-header gradient">
          <div className="container pt-3">
            <div className="row justify-content-center align-items-center">
              <div className="col-md-5">
                <h2 style={{ fontWeight: 800 }}>
                  Heart of Perfect Financial Planning
                </h2>
                <p>
                  Let’s sort money affairs together, the more we get to know you
                  the more you can earn. We promise you a brand new financial
                  attitude.
                </p>
                <Link to={link}>
                  <button className="btn btn-lg btn-custom">
                    Getting Started
                  </button>
                </Link>
              </div>
              <div className="col-md-5 pt-3">
                <img
                  src={"../images/pngegg.png"}
                  height="500"
                  alt="pig image"
                />
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffec67"
            fillOpacity="1"
            d="M0,192L26.7,176C53.3,160,107,128,160,133.3C213.3,139,267,181,320,208C373.3,235,427,245,480,229.3C533.3,213,587,171,640,176C693.3,181,747,235,800,218.7C853.3,203,907,117,960,85.3C1013.3,53,1067,75,1120,112C1173.3,149,1227,203,1280,213.3C1333.3,224,1387,192,1413,176L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
          />
        </svg>
        <div className="intro mb-5">
          <div className="row justify-content-center text-center">
            <div className="col-md-6 justify-content-center">
              <h2 style={{ fontWeight: 800, fontSize: "2.5rem" }}>
                What can you do with
              </h2>
              <h2 style={{ fontWeight: 800, fontSize: "2.5rem" }}>
                MoneyThings
              </h2>
            </div>
          </div>
        </div>

        <div className="icons mt-5 mb-5">
          <div className="container">
            <div className="row justify-content-center align-self-center text-center">
              <div className="col-md-2">
                <div className="icon mb-4 mt-4">
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill="currentColor"
                      className="bi bi-window-dock"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 5H1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5zm0-1H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1zm1-1a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3z"
                      />
                      <path d="M3 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm4 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                    </svg>
                  </div>
                  <h3>Overview</h3>
                  <p>Overview all your account summaries in just one page</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="icon mb-4 mt-4">
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill="currentColor"
                      className="bi bi-clipboard-plus"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z"
                      />
                      <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                      <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                    </svg>
                  </div>
                  <h3>All Time</h3>
                  <p>Unlock your account details and explore more</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="icon mb-4 mt-4">
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill="currentColor"
                      className="bi bi-graph-up"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"
                      />
                    </svg>
                  </div>
                  <h3>Trend</h3>
                  <p>Make your life easier with data visualization</p>
                </div>
              </div>
              <div className="col-md-2">
                <div className="icon mb-4 mt-4">
                  <div className="mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="80"
                      fill="currentColor"
                      className="bi bi-bell"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                    </svg>
                  </div>
                  <h3>Budget</h3>
                  <p>Set a goal and let us do the math for you</p>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h2
                className="text-center mb-4"
                style={{ fontWeight: 800, fontSize: "2.5rem" }}
              >
                Our Features
              </h2>
              {url_array.map((url, index) => (
                <div key={index}>
                  <LandingInstruction
                    url={url_array[index]}
                    text={text_array[index]}
                    tab={tab_array[index]}
                  />
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Landing.propTypes = {
  user: propTypes.object,
};

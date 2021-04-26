import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavigationComponent(props) {
  const [avatar, setAvatar] = useState("");

  async function logout() {
    const resRaw = await fetch("/user/logout");
    if (!resRaw.ok) {
      const res = await resRaw.text();
      alert(res);
    }
    document.cookie = "_id=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    window.location = "/";
  }

  useEffect(() => {
    if (props.user) {
      setAvatar(`../images/avatar_thumbnail/${props.user.avatar}.png`);
    }
  }, [props.user]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-3">
      <div className="container d-flex halant">
        <Link className="navbar-brand" to="/">
          <div className="d-flex">
            <img
              src={"../images/MoneyEmoji.png"}
              alt="logo"
              width="32"
              height="24"
              className="d-inline-block align-text-top me-2"
            />
            <h1
              className="font-weight-normal mb-0"
              style={{
                fontSize: "1.5rem",
                fontFamily: "Halant serif",
              }}
            >
              MoneyThings
            </h1>
          </div>
        </Link>
        {!props.user ? (
          <div
            className="nav-link"
            style={{ color: "rgba(255,255,255,1)", fontFamily: "Halant serif" }}
          >
            Welcome, Visitor
          </div>
        ) : (
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarScroll"
          >
            <ul className="navbar-nav my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item dropdown d-flex">
                <div
                  className="nav-link dropdown-toggle me-2"
                  id="navbarScrollingDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  tabIndex="0"
                  style={{
                    color: "rgba(255,255,255, 0.8)",
                    fontFamily: "Halant serif",
                  }}
                >
                  Welcome, {props.user.username}
                </div>

                <div>
                  <img
                    src={avatar}
                    alt="avatar_thumbnail"
                    width="40"
                    height="40"
                  />
                </div>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/account">
                      Manage Account
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item" onClick={logout}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

NavigationComponent.propTypes = {
  user: PropTypes.object,
};

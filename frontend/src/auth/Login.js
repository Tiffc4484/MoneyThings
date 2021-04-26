import React, { useState } from "react";
import InputBox from "../shared/InputBox.js";
import { Link, useHistory } from "react-router-dom";
import propTypes from "prop-types";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  
  function handleUsername(evt) {
    setUsername(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    if (!evt.target.checkValidity()) {
      return evt.target.classList.add("was-validated");
    }
    setUsername("");
    setPassword("");
    const hash = await password.hashCode();
    const checked = document.querySelector(".form-check-input").checked;
    const data = {
      username: username,
      password: hash,
      checked: checked,
    };
    fetch("/authentication/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resRaw) => {
        if (!resRaw.ok) {
          resRaw.text().then((res) => {
            alert(res);
          });
        } else {
          alert("Log in succeed");
          props.refreshPage((prev) => !prev);
          history.push("/overview");
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <h1 className="text-center mb-4">Log In</h1>
      <InputBox
        label="Username"
        value={username}
        onChange={handleUsername}
        feedback="Please provide a valid username or email address"
        required={true}
      />
      <InputBox
        label="Password"
        value={password}
        onChange={handlePassword}
        type="password"
        feedback="Please provide a valid password"
        required={true}
      />

      <div className="mb-3 form-check">
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" />
          Keep Me Logged in
        </label>
      </div>
      <button className="mb-3 btn btn-custom text-center">Submit</button>
      <div className="mb-2 d-flex justify-content-end">
        <Link className="text-end d-block" to="/auth/signup">
          Sign up
        </Link>
      </div>
    </form>
  );
}

Login.propTypes = {
  refreshPage: propTypes.func.isRequired,
};

String.prototype.hashCode = async function () {
  // encode as (utf-8) Uint8Array
  const msgUint8 = new TextEncoder().encode(this);
  // hash the message
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
  // convert buffer to byte array
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  // convert bytes to hex string
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
};
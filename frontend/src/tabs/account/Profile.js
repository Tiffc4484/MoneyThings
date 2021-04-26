import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import Modal from "../../shared/Modal";
import InputBox from "../../shared/InputBox";
import "../../stylesheets/Profile.css";

export default function Profile(props) {
  const [avatarIndex, setAvatarIndex] = useState(0);
  const [avatar, setAvatar] = useState("../images/avatar/0.png");
  const [username, setUsername] = useState("");
  const [biography, setBiography] = useState("");

  useEffect(() => {
    if (props.user) {
      setAvatarIndex(props.user.avatar);
      setUsername(props.user.username);
      setBiography(props.user.biography);
    }
  }, [props.user]);

  useEffect(() => {
    setAvatar(`../images/avatar/${avatarIndex}.png`);
  }, [avatarIndex]);

  function handleSubmit() {
    const data = {
      username: username,
      avatar: avatarIndex,
      biography: biography,
    };
    fetch("/user/update-profile", {
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
          console.log("Profile updated");
          props.refreshPage((prev) => !prev);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="flex-container d-flex flex-column justify-content-center pb-5">
      <div className="d-flex justify-content-center align-items-center mb-5">
        <div className="">
          <img
            className="me-5 modify"
            src={avatar}
            alt="avatar"
            width="200"
            height="200"
            data-bs-toggle="modal"
            data-bs-target="#avatar_modal"
          />
        </div>
        <div>
          <div className="fw-light">Username:</div>
          <div
            className="mb-0 modify fs-1"
            data-bs-toggle="modal"
            data-bs-target="#username_modal"
          >
            {username}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center ms-5 mb-5">
        <div className="justify-content-start ms-5">
          <div className="fw-light">Biography:</div>
          <div
            className="mb-5 modify fs-2 fst-italic"
            data-bs-toggle="modal"
            data-bs-target="#biography_modal"
          >
            {biography}
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-custom" onClick={handleSubmit}>
          Apply Changes
        </button>
      </div>
      <Modal
        id="avatar_modal"
        Content={UpdateAvatar}
        dataHandler={setAvatarIndex}
        title="Set Your Avatar"
      />
      <Modal
        id="username_modal"
        Content={UpdateUsername}
        dataHandler={setUsername}
        title="Set Your Username"
      />
      <Modal
        id="biography_modal"
        Content={UpdateBiography}
        dataHandler={setBiography}
        title="Set Your Biography"
      />
    </div>
  );
}

Profile.propTypes = {
  user: propTypes.object.isRequired,
  refreshPage: propTypes.func.isRequired,
};

function UpdateAvatar({ dataHandler }) {
  const [selected, setSelected] = useState();
  return (
    <div className="row">
      {[...Array(9).keys()].map((item, index) => (
        <div
          className="col-4"
          key={"avatar-" + index}
          onClick={() => {
            setSelected(index);
            dataHandler(index);
          }}
        >
          <div className="ratio ratio-1x1">
            <img
              className={
                selected === index ? "shadow rounded-circle" : "rounded-circle"
              }
              src={`../images/avatar/${index}.png`}
              alt="avatar"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

UpdateAvatar.propTypes = {
  dataHandler: propTypes.func.isRequired,
};

function UpdateUsername({ dataHandler }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    dataHandler(value);
  }, [dataHandler, value]);

  return (
    <div>
      <InputBox
        value={value}
        onChange={(evt) => {
          setValue(evt.target.value);
        }}
        required={true}
        label="Username"
      />
    </div>
  );
}

UpdateUsername.propTypes = {
  dataHandler: propTypes.func.isRequired,
};

function UpdateBiography({ dataHandler }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    dataHandler(value);
  }, [dataHandler, value]);

  return (
    <div>
      <InputBox
        value={value}
        onChange={(evt) => {
          setValue(evt.target.value);
        }}
        required={true}
        label="Biography"
      />
    </div>
  );
}

UpdateBiography.propTypes = {
  dataHandler: propTypes.func.isRequired,
};

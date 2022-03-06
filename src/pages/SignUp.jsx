import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign.css";
import "./desktop.css";

export default function Auth() {
  const [isHost, setIsHost] = useState(true);
  const [showPswd, setShowPswd] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const changeToHost = (e) => {
    setIsHost(true);
  };
  const changeToGuest = () => {
    setIsHost(false);
  };

  return (
    <div className="Container--centered fullHeight">
      <div className="Auth__container">
        <div className="Auth__heading">
          <i class="fas fa-arrow-left"></i>
          <span>Sign Up</span>
        </div>

        <div className="Auth__content">
          <div className="Auth__userType">
            <div
              className={`${
                isHost && "Auth__userTypeItem--selected"
              } Auth__userTypeItem`}
              onClick={changeToHost}
            >
              <span>
                <i class="fas fa-user-shield" />
              </span>
              <span>I'm a host</span>
            </div>
            <div
              className={`${
                !isHost && "Auth__userTypeItem--selected"
              } Auth__userTypeItem`}
              onClick={changeToGuest}
            >
              <span>
                <i class="fas fa-user" />
              </span>
              <span>I'm a guest</span>
            </div>
          </div>
          <UserForm
            userType={isHost}
            showPswd={showPswd}
            setShowPswd={setShowPswd}
            setShowModal={setShowModal}
          />
          {showModal && <VerifyNumberModal setShowModal={setShowModal} />}
        </div>
      </div>
    </div>
  );
}

const UserForm = ({ userType, showPswd, setShowPswd, setShowModal }) => {
  const changeVisibility = () => {
    setShowPswd(!showPswd);
  };
  return (
    <>
      <form className="Auth__formItems">
        <div className="Auth__formItem">
          <label for="name">{`${userType ? "Host Name" : "Guest Name"}`}</label>
          <input type="text" id="name" name="name" />
          <label for="name">
            Make sure it matches the name on your goverment ID.
          </label>
        </div>

        <div className="Auth__formItem">
          <label for="number">Contact Number</label>
          <div name="number" className="Auth__formItem--number">
            <span>+1</span>
            <input type="tel" id="tel" />
            <i className="fas fa-check"></i>
          </div>
          <div className="Auth__formItem--modal">
            <span onClick={() => setShowModal(true)}>
              <i className="fab fa-buffer"></i>
              verify your number
            </span>
          </div>
        </div>

        <div className="Auth__formItem">
          <label for="email">Email</label>
          <input type="text" id="name" name="email" />
        </div>

        <div className="Auth__formItem">
          <label for="password">Password</label>
          <div name="password" className="Auth__formItem--password">
            <input type={`${showPswd ? "text" : "password"}`} id="name" />
            <i
              className={`fas ${showPswd ? "fa-eye" : "fa-eye-slash"}`}
              onClick={changeVisibility}
            ></i>
          </div>
        </div>

        <div className="Auth__formItem">
          <label for="name">Confirm Password</label>
          <div name="password" className="Auth__formItem--password">
            <input type={`${showPswd ? "text" : "password"}`} id="name" />
            <i
              className={`fas ${showPswd ? "fa-eye" : "fa-eye-slash"}`}
              onClick={changeVisibility}
            ></i>
          </div>
        </div>

        <div className="Auth__TandC">
          <input type="checkbox" name="tc" value="Bike" />
          <label for="tc">
            i agree to the Terms of service and Privacy policy
          </label>
        </div>

        <input type="submit" className="Auth__submitButton" value="Sign Up" />
      </form>

      <div className="Auth--nav">
        Don't have an account <Link to={"/Signin"}> Sign In</Link>
      </div>
    </>
  );
};

const VerifyNumberModal = ({ setShowModal }) => {
  return (
    <>
      <div
        className="Auth__modalPopup--backdrop"
        onClick={() => setShowModal(false)}
      ></div>
      <div className="Auth__modalPopup--content">
        <div className="Auth__modalPopup--header">
          <i
            className="fas fa-arrow-left"
            onClick={() => setShowModal(false)}
          ></i>
          <span>Verify your number</span>
        </div>
        <div className="Auth__modalPopup--body">
          <div className="Auth__modalPopup--body--text">
            <span>Enter the code sent to </span>
            <span>+1 123 456 7890</span>
          </div>
          <div className="Auth__modalPopup--body--input">
            <input type="text" />
            <button>Verify</button>
          </div>
        </div>
      </div>
    </>
  );
};

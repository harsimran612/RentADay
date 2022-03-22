import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign.css";
import "./desktop.css";

export default function Auth() {
  const [showPswd, setShowPswd] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="Container--centered fullHeight">
      <div className="Auth__container">
        <div className="Auth__heading">
          <i class="fas fa-arrow-left"></i>
          <span>Sign Up</span>
        </div>

        <div className="Auth__content">
          <UserForm
            showPswd={showPswd}
            setShowPswd={setShowPswd}
            setShowModal={setShowModal}
          />
        </div>
      </div>
    </div>
  );
}

const UserForm = ({ showPswd, setShowPswd }) => {
  const changeVisibility = () => {
    setShowPswd(!showPswd);
  };
  return (
    <>
      <form className="Auth__formItems">
        <div className="Auth__formItem">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />
          <label for="name">
            Make sure it matches the name on your goverment ID.
          </label>
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
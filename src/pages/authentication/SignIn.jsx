import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign.css";
import "./desktop.css";

export default function Auth() {
  const [showPswd, setShowPswd] = useState(false);

  return (
    <div className="Container--centered fullHeight">
      <div className="Auth__container">
        <div className="Auth__heading">
          <i class="fas fa-arrow-left"></i>
          <span>Sign In</span>
        </div>

        <div className="Auth__content">
          <UserForm
            showPswd={showPswd}
            setShowPswd={setShowPswd}
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
          <label for="name">User Email</label>
          <input type="text" id="name" name="name" />
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

        <input type="submit" className="Auth__submitButton" value="Sign In" />
      </form>

      <div className="Auth--nav">
        Don't have an account <Link to={"/Signup"}> Sign Up</Link>
      </div>
    </>
  );
};


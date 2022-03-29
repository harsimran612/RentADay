import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign.css";
import "./desktop.css";
import {useNavigate} from "react-router-dom";
import { useUtils } from "../../context/utilsContext";
import { useAuth } from "../../context/userContext";

export default function Auth() {
  const [showPswd, setShowPswd] = useState(false);

  return (
    <div className="Container--centered fullHeight">
      <div className="Auth__container">
        <div className="Auth__heading">
          <Link to={"/"}>
            <i className="fas fa-arrow-left"></i>
          </Link>
          <span>Sign Up</span>
        </div>

        <div className="Auth__content">
          <UserForm showPswd={showPswd} setShowPswd={setShowPswd} />
        </div>
      </div>
    </div>
  );
}

const UserForm = ({ showPswd, setShowPswd }) => {
  const { handleBackdrop, handlerSnackbar } = useUtils();
  const { setUser } = useAuth();
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [confirmPassword,setConfirmPassword] = useState();
  const navigate = useNavigate();

  const changeVisibility = () => {
    setShowPswd(!showPswd);
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      alert("Please Fill all the Feilds");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords Do Not Match");
      return;
    }
    try {
      // open backdrop
      handleBackdrop(true);
      const config = {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email, password })
      };

      fetch("http://localhost:8080/api/user", config).then(res => res.json()).then(res => {
        if (res.success) {
          // close backdrop
          handleBackdrop(false);
          // save data in local storage
          localStorage.setItem("rent-a-day-user", JSON.stringify(res.data));
          // set user in context
          setUser({ id: res.data.id, name: res.data.name, email: res.data.email });
          // open success snackbar
          handlerSnackbar({ message: res.message, type: "success", duration: 2000 });
          // navigate to dashboard
          navigate("/home");
        } else {
          // close backdrop
          handleBackdrop(false);
          // open error snackbar
          handlerSnackbar({ message: res.message, type: "error", duration: 5000 });
        }
      });
    } catch (error) {
      // close backdrop
      handleBackdrop(false);
      // open error snackbar
      handlerSnackbar({
        message: "Something Went Wrong, Please Try Again",
        type: "error",
        duration: 5000
      });
    }
  };
  return (
    <>
      <form className="Auth__formItems" onSubmit={signUpHandler}>
        <div className="Auth__formItem">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="name">
            Make sure it matches the name on your goverment ID.
          </label>
        </div>

        <div className="Auth__formItem">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="Auth__formItem">
          <label htmlFor="password">Password</label>
          <div name="password" className="Auth__formItem--password">
            <input
              type={`${showPswd ? "text" : "password"}`}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i
              className={`fas ${showPswd ? "fa-eye" : "fa-eye-slash"}`}
              onClick={changeVisibility}
            ></i>
          </div>
        </div>

        <div className="Auth__formItem">
          <label htmlFor="name">Confirm Password</label>
          <div name="password" className="Auth__formItem--password">
            <input
              type={`${showPswd ? "text" : "password"}`}
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <i
              className={`fas ${showPswd ? "fa-eye" : "fa-eye-slash"}`}
              onClick={changeVisibility}
            ></i>
          </div>
        </div>

        <input type="submit" className="Auth__submitButton" value="Sign Up" />
      </form>

      <div className="Auth--nav">
        Don't have an account <Link to={"/sign-in"}> Sign In</Link>
      </div>
    </>
  );
};
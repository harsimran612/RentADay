import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sign.css";
import "./desktop.css";
import { useUtils } from "../../context/utilsContext";
import { useAuth } from "../../context/userContext";

export default function Auth() {
  const [showPswd, setShowPswd] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      navigate("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Container--centered fullHeight">
      <div className="Auth__container">
        <div className="Auth__heading">
          <Link to={"/"}><i className="fas fa-arrow-left"></i></Link>
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
  const { handleBackdrop, handlerSnackbar } = useUtils();
  const {setUser} = useAuth()
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const changeVisibility = () => {
    setShowPswd(!showPswd);
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please Fill all the Feilds");
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
        body: JSON.stringify({ email, password })
      };

      fetch("http://localhost:8080/api/user/login", config).then(res => res.json()).then(res => {
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
        message: "Something went wrong, please try again",
        type: "error",
        duration: 5000
      });
    }
  };

  return (
    <>
      <form className="Auth__formItems" onSubmit={signInHandler}>
        <div className="Auth__formItem">
          <label htmlFor="name">User Email</label>
          <input
            type="email"
            id="name"
            name="name"
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

        <input type="submit" className="Auth__submitButton" value="Sign In" />
      </form>

      <div className="Auth--nav">
        Don't have an account <Link to={"/sign-up"}> Sign Up</Link>
      </div>
    </>
  );
};
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sign.css";
import "./desktop.css";
import axios from "axios";


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
  const [email,setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const changeVisibility = () => {
    setShowPswd(!showPswd);
  };
  const submitLogin = async () =>{
    setLoading(true);
    if (!email || !password) {
      alert("Please Fill all the Feilds" );
      setLoading(false);
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:8080/api/user/login",
        { email, password },
        config
      );
      alert("Login Successful");
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate.push("/home");
    } catch (error) {
      alert("Error Occured!");
      setLoading(false);
    }
    
  }
  return (
    <>
      <form className="Auth__formItems">
        <div className="Auth__formItem">
          <label for="name">User Email</label>
          <input type="email" id="email" name="name" onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className="Auth__formItem">
          <label for="password">Password</label>
          <div name="password" className="Auth__formItem--password">
            <input type={`${showPswd ? "text" : "password"}`} id="name" onChange={(e)=>setPassword(e.target.value)}/>
            <i
              className={`fas ${showPswd ? "fa-eye" : "fa-eye-slash"}`}
              onClick={changeVisibility}
            ></i>
          </div>
        </div>

        <input type="submit" className="Auth__submitButton" value="Sign In" onClick={submitLogin} />
      </form>

      <div className="Auth--nav">
        Don't have an account <Link to={"/Signup"}> Sign Up</Link>
      </div>
    </>
  );
};


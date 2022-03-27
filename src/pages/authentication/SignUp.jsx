import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign.css";
import "./desktop.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

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
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [confirmPassword,setConfirmPassword] = useState();
  const navigate = useNavigate();
  const changeVisibility = () => {
    setShowPswd(!showPswd);
  };
  const signUpDetails = async (e) =>{
    if (!name || !email || !password || !confirmPassword) {
      alert("Please Fill all the Feilds" );
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords Do Not Match");
      return;
    }
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:8080/api/user",
        {
          name,
          email,
          password,
        },
        config
      );
      alert("registration Successful");
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate.push("/home");
    } catch (error) {
      alert("Error Occured!");
    }
  }
  return (
    <>
      <form className="Auth__formItems">
        <div className="Auth__formItem">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)}/>
          <label for="name">
            Make sure it matches the name on your goverment ID.
          </label>
        </div>

        <div className="Auth__formItem">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>

        <div className="Auth__formItem">
          <label for="password">Password</label>
          <div name="password" className="Auth__formItem--password">
            <input type={`${showPswd ? "text" : "password"}`} id="password" onChange={(e)=>setPassword(e.target.value)}/>
            <i
              className={`fas ${showPswd ? "fa-eye" : "fa-eye-slash"}`}
              onClick={changeVisibility}
            ></i>
          </div>
        </div>

        <div className="Auth__formItem">
          <label for="name">Confirm Password</label>
          <div name="password" className="Auth__formItem--password">
            <input type={`${showPswd ? "text" : "password"}`} id="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)} />
            <i
              className={`fas ${showPswd ? "fa-eye" : "fa-eye-slash"}`}
              onClick={changeVisibility}
            ></i>
          </div>
        </div>

        <input type="submit" className="Auth__submitButton" value="Sign Up" onClick={signUpDetails} />
      </form>

      <div className="Auth--nav">
        Don't have an account <Link to={"/Signin"}> Sign In</Link>
      </div>
    </>
  );
};
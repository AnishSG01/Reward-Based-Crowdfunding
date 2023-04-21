import React, { useContext, useState } from "react";
import "../styles/signin.css";
import toast, { Toaster } from "react-hot-toast";
import { useCookies } from "react-cookie";
import { json, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../context/User/UserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  const {user , setUser , getuser} = useContext(UserContext);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.success("All fields are required");
      return;
    }

    if (password.length < 8) {
      toast.success("Password must be 8 letter");
    }

    const res = axios
      .post("http://localhost:4000/api/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.success === "true") {
          setCookie("token", res.data.token);
          toast.success(`${res.data.user.name}! Logged in`);
          toast.success(`🚩 जय श्री राम 🚩`);
          console.log(res.data.user);
          setUser(res.data.user);
          let userstring = JSON.stringify(res.data.user);
          sessionStorage.setItem("user", userstring);
          // getuser();
          navigate("/");
          // console.log(res.data);
        } else {
          toast.success(`Wrong credentials`);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="signin-div">
        <div className="signin-left">
          <div className="signin-left-upper">
            <h3>Login</h3>
          </div>
          <div className="signin-left-lower">
            <input
              type="email"
              name="mail"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="current-password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button>Login</button>

            <small className="lower-small">
              Need an account ? <a href="/signin"> SIGN UP </a>
            </small>
          </div>
        </div>
        <div className="signin-right">
          <img
            src="https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif"
            alt=""
          />
        </div>
      </div>
    </form>
  );
}

export default Login;

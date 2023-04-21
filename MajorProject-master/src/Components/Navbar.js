import React, { useEffect, useState } from "react";
import "../App.css";
import logo1 from "../Assets/logo1.png";
import { useCookies } from "react-cookie";
import { useContext } from "react";
import UserContext from "../context/User/UserContext";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [cookies, setCookies] = useCookies();
  const { user, getuser } = useContext(UserContext);
  let loggeduser = JSON.parse(sessionStorage.getItem("user"));
  let role = loggeduser ? loggeduser.role : "";

  const handleLogout = async (e) => {
    // if (loggeduser) {
      const res = await axios
        .get(`http://localhost:4000/api/logout`)
        .then((res) => {
          document.cookie =
            "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          toast.success(`Logged out`);
          sessionStorage.removeItem("user");
        })
        .catch((err) => {
          console.log(err);
        });
    // }
  };

  // useEffect(()=>{
  //     if(cookies.token)
  //     {
  //       getuser();
  //     }
  // }, [cookies.token])

  return (
    <div>
      <nav>
        <img
          src={logo1}
          alt="Logo image"
          className="navbar-logo"
          height="100px"
        />
        <input type="checkbox" id="check" />
        <label for="check" className="menu-btn">
          {" "}
          <i className="fa-solid fa-bars"></i>
        </label>
        <ul>
          <li>
            {" "}
            <a href="/" className="active">
              {" "}
              Home{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/about"> About </a>{" "}
          </li>
          <li>
            {" "}
            <a href="/contact"> Contact </a>{" "}
          </li>
          {role === "organisation" && (
            <li>
              {" "}
              <a href="/createDonation"> Request </a>{" "}
            </li>
          )}
          <li>
            <a href={role === 'admin' ? '/support' : '/contact'}> Help </a>
          </li>
        </ul>

        <div className="navbar-sign">
          {/* <p> {cookies.token ? `hello ${user.name}!` : ''}</p> */}

          {<p> {loggeduser ? `hello ${loggeduser.name}!` : ""}</p>}

          {/* {console.log(user)} */}

          {cookies.token === undefined ? (
            <a href="/signin" className="sign-btn">
              {" "}
              sign Up <i className="fa-solid fa-right-to-bracket"></i>{" "}
            </a>
          ) : (
            <a href="#" className="sign-btn" onClick={handleLogout}>
              {" "}
              Logout <i className="fa-solid fa-right-to-bracket"></i>{" "}
            </a>
          )}
        </div>

        {/* {console.log(cookies.token)} */}
      </nav>
    </div>
  );
}

export default Navbar;

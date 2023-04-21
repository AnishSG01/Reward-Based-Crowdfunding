import React, { useState } from "react";
import "../styles/signin.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useContext } from "react";
import UserContext from "../context/User/UserContext";

function SignIn() {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  const [name, setName] = useState("");
  const [contact, setContact] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role , setRole] = useState("");
  const {user , getuser} = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !contact || !email || !password || !role) {
      toast.success("Enter all field value");
      return;
    }

    if (password.length < 8) {
      toast.success("Password must be greater than 8");
      return;
    }

    const res = await axios
      .post(`http://localhost:4000/api/signup`, {
        name,
        contact,
        email,
        password,
        role
      })
      .then((res) => {
        setCookie("token", res.data.token);
        toast.success(`Hello ${res.data.createdUser.name}! Welcome`);
        toast.success(`🚩 जय श्री राम 🚩`);
        sessionStorage.setItem('user' , JSON.stringify(res.data.createdUser));
        // getuser();
        navigate("/");
        
      })
      .catch((err) => {
        toast.success(`Enter correct credentail`);
        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="signin-div">
          <div className="signin-left">
            <div className="signin-left-upper">
              <h3>Sign Up</h3>
            </div>
            <div className="signin-left-lower">
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="tel"
                placeholder="Enter Phone Number"
                name="phone"
                onChange={(e) => setContact(e.target.value)}
                required
              />
              <input
                type="email"
                name="mail"
                placeholder="Enter Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <select name="role" required onChange={(e) => setRole(e.target.value)}>
                <option>Select Role</option>
                <option value="user">User</option>
                <option value="organisation">Organisation</option>
              </select>

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              

              <button>Sign up</button>

              <small className="lower-small">
                Already have an account ? <a href="/login"> LOGIN </a>
              </small>
              <Toaster
                toastOptions={{
                  className: "",
                  duration: 5000,
                  style: {
                    background: "#6674cc",
                    color: "#fff",
                  },

                  success: {
                    duration: 3000,
                    theme: {
                      primary: "green",
                      secondary: "black",
                    },
                  },
                }}
              />
            </div>
          </div>

          <div className="signin-right">
            <img
              src="https://media.istockphoto.com/id/1312423107/vector/stealing-data-concept-flat-vector-illustration-online-registration-form-login-to-social.jpg?s=612x612&w=0&k=20&c=7Trftif8xV9FCDO5B4M7JiBpZUFlXo51m5lfI6hYCog="
              alt="sign in Logo"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default SignIn;

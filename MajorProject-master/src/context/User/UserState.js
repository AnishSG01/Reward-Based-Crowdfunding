import UserContext from "./UserContext";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useState } from "react";

const UserState = (props) => {

  let loggeduser = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(loggeduser);
  const [cookies, setCookies] = useCookies();

  const headers = {
    "Content-Type": "application/json",
    'token': cookies.token,
  };

  const getuser = async () => {

    const res = await axios.get("http://localhost:4000/api/profile", {
      headers,
    }).then((res) => {
      setUser(res.data.user);
      console.log(res.data.user)
    })
    .catch((err)=>{
      console.log(err.message);
    })
    
  };

  return (
    <UserContext.Provider value={{ user, setUser, getuser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;

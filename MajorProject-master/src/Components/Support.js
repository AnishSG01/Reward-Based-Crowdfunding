import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../styles/support.css";
import ContactCard from "./ContactCard";

function Support() {
//   const contact = [
//     {
//       name: "Lavlesh singh",
//       email: "lavleshsingh1520@gmail.com",
//       phone: 7738649525,
//       subject: "Testing Contact",
//       message: "Hello Im facing problem during donation list.",
//       isProcessed: false,
//     },
//     {
//       name: "Lavlesh singh",
//       email: "lavleshsingh1520@gmail.com",
//       phone: 7738649525,
//       subject: "Testing Contact",
//       message: "Hello Im facing problem during donation list.",
//       isProcessed: false,
//     },
//   ];

  const [contact , setContact] = useState([{}]);

  const getcontact = () => {
    const res = axios
      .get("http://localhost:4000/api/contact")
      .then((res) => setContact(res.data.data))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getcontact();
  }, []);

  return (
    <div className="support-main">
      <div className="support-main-upper">
        <h1>User Queries</h1>
      </div>
      <div className="support-main-lower">
        {contact.map((item) => {
          return (
            <ContactCard
              name={item.name}
              email={item.email}
              phone={item.phone}
              subject={item.subject}
              message={item.message}
              isProcessed={item.isProcessed}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Support;

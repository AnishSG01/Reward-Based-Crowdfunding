import React, { useState } from "react";
import "../styles/contactcard.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { toast } from "react-hot-toast";
import axios from "axios";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ContactCard({ name, email, phone, subject, message, isProcessed }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [reply, setReply] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const res = axios
      .post("http://localhost:4000/api/sendemail", {
        name,
        email,
        subject,
        reply,
      })
      .then((res) => {
        if (res.data.success) {
          toast.success("email sent");
        } else {
          toast.success("Try Again plaese!");
        }
        setOpen(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="contactcard-main">
        <div className="contactcard-left">
          <p>Name : {name}</p>
          <p>Email : {email}</p>
          <p>Phone : {phone}</p>
          <p>Subject : {subject}</p>
          <p>Message : {message}</p>
        </div>
        <div className="contactcard-right">
          <button onClick={handleOpen} className="reply-btn">
            {" "}
            <span>Reply</span> <MailOutlineIcon />{" "}
          </button>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="contactModal-main">
            <div className="contactmodal-detail">
              <p>Name : {name}</p>
              <p>Subject : {subject} </p>
              <p>Message : {message}</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="contactmodal-form">


                <h2> Reply </h2>
                <div className="contactmodal-div1">
                  <label htmlFor="to"> To : </label>
                  <input type="text" id="to" value={email} /> <br /> <br />
                  <label htmlFor="msg">Message : </label>
                  <textarea
                    name="message"
                    id="msg"
                    cols="50"
                    rows="8"
                    placeholder="Enter Your Reply..."
                    onChange={(e) => {
                      setReply(e.target.value);
                    }}
                  ></textarea>
                </div>

                <div className="contactmodal-btn">
                  <button>
                    Send <ForwardToInboxIcon />{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default ContactCard;

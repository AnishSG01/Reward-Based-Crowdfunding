import React, { useState } from "react";
import { toast } from "react-hot-toast";
import "../styles/createDonation.css";
import { db, storage } from "../firebase";
import firebase from "firebase";
import { upload } from "@testing-library/user-event/dist/upload";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import axios from "axios";

function CreateDonation() {
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [description, setDescription] = useState("");
  const [cause, setCause] = useState("");
  const [images, setImages] = useState([]);
  const [detail, setDetail] = useState("");
  const [urls, setUrls] = useState([]);
  const [isApproved , setIsApproved] = useState(false);
  const [isProcessed , setIsProcessed] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = (e) => {

    e.preventDefault();

    for (let i = 0; i < images.length; i++) {
      let image = images[i];
      uploadImageAsPromise(image);
    }

  };

  const uploadImageAsPromise = async (image) => {
    const storageRef = storage.ref(`images/${image.name}`);
    //Upload file
    var task = storageRef.put(image);

    //Update progress bar
    task.on(
      "state_changed",
      function progress(snapshot) {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      function error(err) {
        console.log(error.message);
        alert(error.message);
      },
      function complete() {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            // console.log(url)
            setUrls((prev) => [...prev, url]);
          });
      }
    );
    setProgress(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();  
    // setPosterUrl(urls[0]);
    // setDocumentUrl(urls[1]);

    if(!organisation || !email || !phone || !description || !cause || !detail || !urls[0] || !urls[1])
    {
      toast.success('All Fields are Required')
      return;
    }

    // console.log(`${orgname}--${phone}--${email}--${description}--${urls[0]}--${urls[1]}--${cause}--${detail}`)

    const posterUrl = urls[0];
    const documentUrl = urls[1];

    // console.log(`${organisation}--${phone}--${email}--${description}--${cause}--${detail}`)
    // console.log(`${posterUrl}`)
    // console.log(`${documentUrl}`)


    const res = axios.post('http://localhost:4000/api/createDonation', {
      organisation,
      phone,
      email,
      description,
      posterUrl,
      documentUrl,
      cause,
      detail,
      isApproved,
      isProcessed
    }).then((res) => {
        if(res.data.success)
        {
          // console.log(res);
          toast.success('Created Succesfully');
        }
        else
        {
          toast.success('Try Again with valid Details')
        }
    }).catch((err) => console.log(err.message))

  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <div className="create-donation-main">
          <div className="create-donation-left">
            <div className="create-donation-left-div1">
              <h2>Donation Request form</h2>
              <p>
                <i className="fa-solid fa-envelope"></i>
              </p>
            </div>

            <div className="create-donation-left-div2">
              <div className="input-div">
                <input
                  type="text"
                  placeholder="Organisation Name"
                  name="name"
                  onChange={(e) => setOrganisation(e.target.value)}
                  required
                />
              </div>
              <div className="input-div">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-div">
                <input
                  type="tel"
                  placeholder="Contact Number"
                  name="number"
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="input-div">
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>

              <div className="input-div">
                <input
                  type="text"
                  placeholder="Cause For Donation"
                  name="cause"
                  onChange={(e) => setCause(e.target.value)}
                  required
                />
              </div>

              <div className="input-div file-input-div">
                <input
                  type="file"
                  name="document"
                  placeholder="verification docs"
                  multiple="multiple"
                  onChange={(e) => setImages(e.target.files)}
                  required
                  className="file-input"
                />

                <button onClick={handleUpload}>
                  {" "}
                  <UploadFileIcon className="icon" />{" "}
                </button>
                <br />
                <small> *attach Logo and document for verification </small>
              </div>
            </div>

            <div className="create-donation-left-div3">
              <textarea
                name="info"
                cols="80"
                rows="2"
                placeholder="Cause Details"
                onChange={(e) => setDetail(e.target.value)}
                
              ></textarea>
            </div>

            <div className="create-donation-left-div4">
              <progress className="progress" value={progress} max="100" />

              <div className="btn">
                <input type="submit" value="Request" />
                <p>
                  <i className="fa-solid fa-paper-plane"></i>
                </p>
              </div>
            </div>
          </div>

          <div className="create-donation-right">
            
            <img
              src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=996&t=st=1674544571~exp=1674545171~hmac=79c08793a6a7e77875aa17fa919180ccdbeadd9dac0c0d036225fee52cbc0b2e"
              alt=""
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateDonation;

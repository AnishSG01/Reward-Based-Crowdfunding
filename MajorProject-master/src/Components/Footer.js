import React from "react";
import logo1 from "../Assets/logo1.png";

function Footer() {
  return (
    <div className="footer-div">
      <div className="footer-upper">
        <div className="footer-div1">
          <img src={logo1} alt="" />
          <h4>
            {" "}
            <strong> Donate & Earn </strong>
          </h4>
          <p>
            <q>Be the reason someone smiles</q>
          </p>
        </div>
        <div className="footer-div2">
          <h2>Menu</h2>

          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-div3">
          <h2>Services</h2>

          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of use</a>
            </li>
            <li>
              <a href="#">QnA</a>
            </li>
          </ul>
        </div>
        <div className="footer-div4">
          <h2>GET IN TOUCH</h2>

          <label htmlFor="">
            Email : <a href="mailto:Support@funding.in">Support@funding.in</a>
          </label>
        </div>
      </div>

      <div className="footer-bottom">
        <p>copyright &copy; 2022 Xyz. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;

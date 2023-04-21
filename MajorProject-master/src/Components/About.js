import React from "react";
import "../styles/about.css";
import about from "../Assets/about.jpg";
import Card from "./Card";
import photo1 from "../Assets/photo1.jpg";
import photo2 from "../Assets/photo2.jpg";
import photo3 from "../Assets/photo3.jpg";

function About() {
  return (
    <div className="about">

      <div className="about-main">
        <div className="main-left">
          <img src={about} alt="" />
        </div>
        <div className="main-right">
          <h2>About Us</h2>

          <p>
            Reward based blockchain system is a platform with an aim to provide
            to those in need and raising funds to accomplish the goal.
          </p>

          <p>
            This fundraising platform is a community where people/organisation
            can come together to show their support for a cause and make some
            donations for the same. Donators will also get a reward in the form
            of NFT based on the amount donated.
          </p>

          <p>
            This whole platform is secured and you can select and make decisions
            for the cause you want to show your support for. So let’s come
            together as our one contribution to the society would be a reason
            for many smiles around! Lets donate and make a move for a noble
            cause!
          </p>
        </div>
      </div>

      <div className="team-detail">
        <div className="detail-upper">
          <h2> Team Guide : Prof. Suchita Walke </h2>
        </div>
        <div className="cards-container">
          <Card imgurl={photo1} name="Lavlesh Singh" />
          <Card imgurl={photo2} name="Paavana Shetty" />
          <Card imgurl={photo3} name="Anish Ghogare" />
        </div>
      </div>
    </div>
  );
}

export default About;

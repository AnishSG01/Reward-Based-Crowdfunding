import React from "react";
import "../styles/about.css";

function Card(props) {
  return (
    <div className="card-div">
      <img src={props.imgurl} alt="team image" />

      <h3 className="team-name">{props.name}</h3>

      <p className="team-desc">final year CS Undergrad</p>
    </div>
  );
}

export default Card;

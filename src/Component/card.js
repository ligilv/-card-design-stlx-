import React from "react";
import "./Card.css";
function Card({ email, fname, lname, avImage }) {
  return (
    <div className="mainWrap">
      <div className="imgWrapper">
        <img src={avImage} className="image" />
      </div>
      <div className="ContentWrapper">
        <span className="inText">
          {/* fistname and lastname  */}
          {fname} {lname}
        </span>
        <span className="inText">{email}</span>
        {/* Click on on contact me to open your mail client */}
        <a href={`mailto:${email}`}>
          <button className="contactBtn">Contact</button>
        </a>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import icon1 from "../assests/images/WebDimg.png";
const ServicesCard = ({ imgsrc, heading, para }) => {
  return (
    <>
      <div className="service">
        <img src={imgsrc} alt="i" className="icon" />
        <h3>{heading}</h3>
        <p>{para}</p>
      </div>
    </>
  );
};

export default ServicesCard;

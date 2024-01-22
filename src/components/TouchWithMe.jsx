import React from "react";
import fbIcon from "../assests/images/fbIcon.png";
import instaIcon from "../assests/images/instaLogo.png";
import linkdLogo from "../assests/images/linkedinLogo.png";
import { Link } from "react-router-dom";
const TouchWithMe = () => {
  return (
    <>
      <div className="twm">
        <h4>Touch with me</h4>
        <div className="imgBox">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={fbIcon} alt="fbIcon" className="icon" />
          </a>
          <a
            href="https://www.instagram.com/shreyasingh_839/?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D"
            target="_blank"
          >
            <img src={instaIcon} alt="insta" className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/shreya-singh20" target="_blank">
            <img
              src={linkdLogo}
              alt="linkedin"
              className="icon"
              style={{ width: "45px" }}
            />
          </a>
        </div>
      </div>
    </>
  );
};
<a href=""></a>;
export default TouchWithMe;

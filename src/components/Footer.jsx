import React from "react";
import logo from "../assests/images/logo1.png";
import fbIcon from "../assests/images/fbIcon.png";
import instaIcon from "../assests/images/instaLogo.png";
import linkdLogo from "../assests/images/linkedinLogo.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer1">
          <img src={logo} alt="logo" className="logobottm" />
          <p>|Copyright © 2022 ShreyaCodes.com</p>
        </div>
        <div className="footer2">
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
            <a
              href="https://www.linkedin.com/in/shreya-singh20"
              target="_blank"
            >
              <img
                src={linkdLogo}
                alt="linkedin"
                className="icon"
                style={{ width: "45px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

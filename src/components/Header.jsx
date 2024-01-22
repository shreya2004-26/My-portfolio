import React from "react";
import Logo from "../assests/images/logo1.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="headerMainContainer">
        <img src={Logo} alt="Logo" className="logo" />
        <div className="navigationBox">
          <Link to="/" className="navigation">
            Home
          </Link>
          <Link to="/about" className="navigation">
            About
          </Link>
          <Link to="/services" className="navigation">
            Services
          </Link>

          <Link to="/portfolio" className="navigation">
            Portfolio
          </Link>
          <Link to="/contact" className="navigation">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;

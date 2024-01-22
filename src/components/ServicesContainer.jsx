import React from "react";
import icon1 from "../assests/images/WebDimg.png";
import icon2 from "../assests/images/graphicsImg.png";
import icon3 from "../assests/images/socialMedia.png";

const ServicesContainer = () => {
  return (
    <>
      <div className="servicesContainer">
        <h1>Services</h1>
        <div className="serviceBox">
          <div className="service">
            <img src={icon1} alt="i" className="icon" />
            <h3>Web Development</h3>
            <p>
              Focus on Your Business While We Focus on Your Website. Call Now
              for a Free Quote. You Run the Business You Know, and We’ll Build
              the Website You Need.Award Winning Support. SEO Optimized website
              design, Payment gateway Integration & free SSL.
            </p>
          </div>
          <div className="service">
            <img src={icon2} alt="i" className="icon" />
            <h3>Graphics Design</h3>
            <p>
              We Build immediately identifiable Innovative designs that can be
              held consistent with all your online and offline marketing. Make
              sure that your business delivers the best impression of your
              brand.
            </p>
          </div>
          <div className="service">
            <img src={icon3} alt="i" className="icon" />
            <h3>Social Media Marketing</h3>
            <p>
              Focuses on driving impactful business growth through social media
              services.We craft messages across multiple platforms and use data
              driven analysis to increase your reach and optimize your brand
              voice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesContainer;

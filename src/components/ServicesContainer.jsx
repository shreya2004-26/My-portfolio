import React from "react";
import icon1 from "../assests/images/WebDimg.png";
import icon2 from "../assests/images/graphicsImg.png";
import icon3 from "../assests/images/socialMedia.png";
import ServicesCard from "./ServicesCard";

const ServicesContainer = () => {
  return (
    <>
      <div className="servicesContainer">
        <h1>Services</h1>
        <div className="serviceBox">
          <ServicesCard
            imgsrc={icon1}
            heading="Web Development"
            para="Focus on Your Business While We Focus on Your Website. Call Now for a Free Quote. You Run the Business You Know, and We’ll Build the Website You Need.Award Winning Support. SEO Optimized website design, Payment gateway Integration & free SSL."
          />
          <ServicesCard
            imgsrc={icon2}
            heading="Graphics Design"
            para="We Build immediately identifiable Innovative designs that can be held consistent with all your online and offline marketing. Make sure that your business delivers the best impression of your brand."
          />
          <ServicesCard
            imgsrc={icon3}
            heading="Social Media Marketing"
            para="Focuses on driving impactful business growth through social media services.We craft messages across multiple platforms and use data driven analysis to increase your reach and optimize your brand voice."
          />
        </div>
      </div>
    </>
  );
};

export default ServicesContainer;

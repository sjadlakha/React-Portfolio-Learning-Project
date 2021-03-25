import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Machine Learning and Web Devlopment</h1>
        <Typed
          className="typed-text"
          strings={[
            "Machine Learning",
            "Web Development",
            "Automation",
            "Deep Learning",
            "Data Structures and Algorithms",
          ]}
          loop
          typeSpeed={40}
          backSpeed={60}
        />
        <a href="#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Header;

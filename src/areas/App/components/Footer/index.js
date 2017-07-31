import React from "react";

import "./styles.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="__layout">
        <div className="__about">
          <h3 className="__header"> About the company</h3>
          {" "}
          We are a family owned and operated business and have
          been in the framing industry for 20 years. We value our customers and
          strive every day to bring
          {" "}
          them prompt service and quality products. Please feel free to browse
          our product catalog to see what we carry but note that pricing
          information is only available to members.
        </div>
        <div className="__information">
          <h3 className="__header"> Information</h3>
          <img className="__icon" src="assets/map.svg" />
        </div>
        <div className="__contact">
          <h3 className="__header">Contact</h3>
        </div>
      </div>
      <div className="__copyright">
        ©2011 Florida Framing Supplies LLC | 8500 Baycenter Road Suite 22 -
        Jacksonville ,FL 32256 | ph. (904) 367-8506
      </div>
    </div>
  );
};

export default Footer;

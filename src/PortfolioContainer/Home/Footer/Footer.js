import React from "react";
import "./Footer.css";
export default function Footer() {
    return (
      <div className="footer-container">
          <div className="footer-parent">
              <img
              src={require("../../../assets/Home/profilephoto.jpg").default}
              alt="No internet connection"/>

          </div>
      </div>
    );
  }
  
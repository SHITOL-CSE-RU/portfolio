import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/shitol.cse">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://twitter.com/shitolcse">
                <i className="fa fa-twitter-square"></i>
              </a>
              <a href="https://www.instagram.com/shitol.cse">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/shitol-sarker-9b3824218/">
                <i class="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/SHITOL-CSE-RU">
                <i class="fa fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Shitol</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Computer Engineer",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "Andoid Developer",
                    2000,
                    "Graphics Designer",
                    2000,
                  ]}
                />
              </h1>
              <span class="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="MyResume.pdf" download="Shitol MyResume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
}

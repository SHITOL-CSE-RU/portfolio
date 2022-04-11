import React from "react";
import "./Home.css";
import Profile from "./Profile";
import Footer from "./Footer/Footer";
export default function Home() {
    return (
      <div className="home-container">
          <Profile />
          <Footer />
      </div>
    );
  }
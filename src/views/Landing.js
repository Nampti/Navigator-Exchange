import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./Landing.css";
import Banner from "../components/Banner";
import Info from "../components/Info";
import Vault from "../components/Vault";
import Summary from "../components/Summary";
import Ecosystem from "../components/Ecosystem";
import Contact from "../components/Contact";
const Landing = () => {
  return (
    <>
      <Banner />
      <Info />
      <Vault />
      <Summary />
      <Ecosystem />
      <Contact />
      <div className="contest-container">
        <div className="contest">
          <span className="content-container">
            <span className="contest-title">Trading Contest Is Live</span>
            <span className="stroke">-</span>
            <span>Prize: 5,000 USDC.e! 🚀</span>
          </span>
          <span className="details">
            <NavLink
              href="https://app.navigator.exchange/#/analytics/contest"
              className="link-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Details
            </NavLink>
          </span>
          <span className="cup">🏆</span>
        </div>
      </div>
    </>
  );
};
export default Landing;

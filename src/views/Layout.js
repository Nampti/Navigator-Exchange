import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="App">
      <video className="videoTag" autoPlay playsInline loop muted></video>
      <div className="App-content">
        <Header />
        <div className="Wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

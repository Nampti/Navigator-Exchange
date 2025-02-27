import React from "react";
import { useState, useEffect } from "react";
import "./Landing.css";
import Banner from "../components/Banner";
import Info from "../components/Info";
import Vault from "../components/Vault";
import Summary from "../components/Summary";
import Ecosystem from "../components/Ecosystem";
import Contact from "../components/Contact";
import MenuLogo from "../assets/icon/menu-logo.png";
import MenuItem1 from "../assets/icon/menuitem1.svg";
import MenuItem2 from "../assets/icon/menuitem2.svg";
import MenuItem3 from "../assets/icon/menuitem3.svg";
import MenuItem4 from "../assets/icon/menuitem4.svg";
import MenuItem5 from "../assets/icon/menuitem5.svg";
const Landing = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [miniMenuActive, setMiniMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  const toggleMiniMenu = () => {
    setMiniMenuActive(!miniMenuActive);
  };
  useEffect(() => {
    if (menuActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuActive]);

  return (
    <>
      <div className="App">
        <video className="videoTag" autoPlay playsInline loop muted>
          <source
            src="https://cdn.mummy.finance/bg_videoMMY.mp4"
            type="video/mp4"
          />
        </video>
        <div className="App-content">
          <div
            className={`App-header-backdrop ${menuActive ? "active" : ""}`}
          ></div>
          <header>
            <div className="App-header-head">
              <div className="App-header-container-left">
                <div className="App-header-link-main">
                  <svg
                    width="170"
                    height="36"
                    viewBox="0 0 170 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_17935_1054)">
                      <path
                        d="M53.0821 21.2019L45.6092 10.5576H42.8433V25.0817H45.3686V14.4452L52.8423 25.0817H55.6082V10.5576H53.0821V21.2019Z"
                        fill="#90FB75"
                      ></path>
                      <path
                        d="M64.4059 10.5576L58.2468 25.0817H60.994L62.4766 21.5432H68.6942L70.1768 25.0817H72.924L66.7649 10.5576H64.4059ZM67.7217 19.1757H63.4506L65.594 14.0344L67.7217 19.1757Z"
                        fill="#90FB75"
                      ></path>
                      <path
                        d="M79.3853 21.9986L74.8275 10.5576H72.0811L78.0738 25.0817H80.6952L86.6871 10.5576H83.961L79.3853 21.9986Z"
                        fill="#90FB75"
                      ></path>
                      <path
                        d="M92.2995 10.5576H89.7742V25.0817H92.2995V10.5576Z"
                        fill="#90FB75"
                      ></path>
                      <path
                        d="M102.582 19.132H106.199V22.1268C105.242 22.6087 104.203 22.8532 103.104 22.8532C101.532 22.8532 100.332 22.3955 99.4333 21.4534C98.5428 20.52 98.0906 19.2741 98.0906 17.751C98.0906 16.2278 98.5389 15.0342 99.4614 14.1485C100.375 13.2713 101.584 12.8268 103.055 12.8268C104.525 12.8268 106.092 13.358 107.644 14.4055L107.737 14.4679H108.29V12.0426L108.116 11.9363C106.406 10.8912 104.569 10.3608 102.659 10.3608C100.748 10.3608 99.0295 11.0615 97.6477 12.4441C96.2651 13.8266 95.5645 15.6349 95.5645 17.8205C95.5645 20.006 96.244 21.812 97.5844 23.193C98.9272 24.5779 100.704 25.2801 102.866 25.2801C104.743 25.2801 106.581 24.7505 108.33 23.707L108.508 23.6015V16.7855H102.582V19.1328V19.132Z"
                        fill="#90FB75"
                      ></path>
                      <path
                        d="M117.234 10.5576L111.074 25.0817H113.822L115.304 21.5432H121.522L123.004 25.0817H125.752L119.593 10.5576H117.234ZM120.549 19.1757H116.278L118.422 14.0344L120.549 19.1757Z"
                        fill="#90FB75"
                      ></path>
                      <path
                        d="M126.302 12.9642H131.066V25.0817H133.592V12.9642H138.356V10.5576H126.302V12.9642Z"
                        fill="#90FB75"
                      ></path>
                      <path
                        d="M152.645 12.4493C151.327 11.0629 149.556 10.3599 147.38 10.3599C145.205 10.3599 143.434 11.0629 142.116 12.4493C140.805 13.8288 140.12 15.6332 140.079 17.8125V17.8195V17.8265C140.12 20.0058 140.805 21.8102 142.116 23.1897C143.433 24.5761 145.204 25.2791 147.38 25.2791C149.557 25.2791 151.327 24.5761 152.645 23.1897C153.956 21.8102 154.641 20.0058 154.682 17.8265V17.8195V17.8125C154.641 15.6339 153.956 13.8296 152.645 12.4493ZM143.886 14.1779C144.737 13.2281 145.878 12.7665 147.371 12.7665C148.865 12.7665 150.008 13.2281 150.867 14.1787C151.723 15.127 152.157 16.3518 152.157 17.8195C152.157 19.2872 151.723 20.5128 150.867 21.4603C150.009 22.4101 148.865 22.8725 147.371 22.8725C145.877 22.8725 144.737 22.4109 143.886 21.4611C143.036 20.5136 142.605 19.2888 142.605 17.8195C142.605 16.3502 143.036 15.1254 143.886 14.1779Z"
                        fill="#90FB75"
                      ></path>
                      <path
                        d="M169.586 24.4401C169.4 24.1557 169.31 23.8456 169.31 23.4926V23.0184C169.31 20.7149 168.698 19.1996 167.489 18.4989C168.034 18.1951 168.478 17.7951 168.812 17.303C169.287 16.6055 169.527 15.8088 169.527 14.9339C169.527 13.6271 169.031 12.5546 168.051 11.7477C167.092 10.958 165.658 10.5581 163.788 10.5581H157.929V25.0821H160.455V19.7057H164.183C165.061 19.7057 165.677 19.912 166.012 20.3181C166.194 20.5618 166.34 20.7938 166.447 21.0079L166.455 21.0227C166.605 21.2922 166.785 21.9116 166.785 23.3364V23.6527C166.785 24.1276 166.896 24.5502 167.115 24.9095L167.221 25.0837H169.646V24.533L169.587 24.4424L169.586 24.4401ZM160.454 12.9842H163.57C164.868 12.9842 165.783 13.1733 166.29 13.5459C166.769 13.8982 167.001 14.4043 167.001 15.0917C167.001 15.7791 166.727 16.2884 166.163 16.668C165.562 17.0726 164.723 17.278 163.668 17.278H160.454V12.9842Z"
                        fill="#90FB75"
                      ></path>
                      <path
                        d="M23.9997 36L23.4264 32.1475C22.7296 27.4624 20.6519 23.2436 17.618 19.9137C17.1314 19.3802 16.6198 18.8686 16.0863 18.382C12.7564 15.3481 8.53758 13.2704 3.85246 12.5736L0 12.0003L36 0L23.9997 36Z"
                        fill="#90FB75"
                      ></path>
                      <path
                        d="M35.9991 0L23.9996 36L23.4263 32.1475C22.7295 27.4624 20.6518 23.2436 17.6179 19.9137L35.9991 0Z"
                        fill="#65BF40"
                      ></path>
                      <path
                        d="M17.6179 19.9137C17.1313 19.3802 16.6197 18.8686 16.0862 18.382L35.9999 0L17.6187 19.9137H17.6179Z"
                        fill="#111212"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_17935_1054">
                        <rect width="169.646" height="36" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="App-header-links">
                  <div className="App-header-links-item">
                    <a
                      href="https://app.navigator.exchange/#/dashboard"
                      className="link-underline"
                      target="_self"
                      rel="noopener noreferrer"
                    >
                      Dashboard
                    </a>
                  </div>
                  <div className="App-header-links-item">
                    <a
                      href="https://docs.navigator.exchange/"
                      className="link-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Perp
                    </a>
                  </div>
                  <div className="App-header-links-item">
                    <a
                      href="https://docs.navigator.exchange/"
                      className="link-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Swap
                    </a>
                  </div>
                  <div className="App-header-links-item dropdown">
                    <div className="App-header-dropdown">
                      <span className="More">
                        Earn
                        <svg
                          className="arrow-menu"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="#828899"
                          class="arrow-icon-tab-header"
                        >
                          <path
                            className="arrow-menu-path"
                            d="M7.66536 11.3333L11.4181 5.83333L3.91259 5.83333L7.66536 11.3333Z"
                            fill="#828899"
                          ></path>
                        </svg>
                        <div className="show-dropdown">
                          <div className="show-dropdown-menu">
                            <a className="menu-item-container" href="#/earn">
                              <div class="menu-item">
                                <img src={MenuItem1} alt="" />
                                <div class="wrap">
                                  <span>Overview</span>
                                  <span class="desc">Manage your earning</span>
                                </div>
                              </div>{" "}
                            </a>
                            <a className="menu-item-container" href="#/earn">
                              <div class="menu-item">
                                <img src={MenuItem2} alt="" />
                                <div class="wrap">
                                  <span>Stake NAVI & esNAVI</span>
                                  <span class="desc">
                                    Stake Navigator governance token
                                  </span>
                                </div>
                              </div>{" "}
                            </a>
                            <a className="menu-item-container" href="#/earn">
                              <div class="menu-item">
                                <img src={MenuItem3} alt="" />
                                <div class="wrap">
                                  <span>Crypto Pool - NLP</span>
                                  <span class="desc">
                                    Index by crypto asset
                                  </span>
                                </div>
                              </div>{" "}
                            </a>
                            <a className="menu-item-container" href="#/earn">
                              <div class="menu-item">
                                <img src={MenuItem4} alt="" />
                                <div class="wrap">
                                  <span>Stable Pool - NSLP</span>
                                  <span class="desc">
                                    Index by stable asset
                                  </span>
                                </div>
                              </div>{" "}
                            </a>
                            <a className="menu-item-container" href="#/earn">
                              <div class="menu-item">
                                <img src={MenuItem5} alt="" />
                                <div class="wrap">
                                  <span>Vest</span>
                                  <span class="desc">
                                    Convert esNAVI tokens to NAVI tokens
                                  </span>
                                </div>
                              </div>{" "}
                            </a>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div className="App-header-links-item">
                    <a
                      href="https://docs.navigator.exchange/"
                      className="link-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vaults
                    </a>
                  </div>
                  <div className="App-header-links-item">
                    <a
                      href="https://docs.navigator.exchange/"
                      className="link-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy
                    </a>
                  </div>
                  <div className="App-header-links-item">
                    <a
                      href="https://docs.navigator.exchange/"
                      className="link-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Referrals
                    </a>
                  </div>
                  <div className="App-header-links-item">
                    <a
                      href="https://docs.navigator.exchange/"
                      className="link-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Portfolio
                    </a>
                  </div>
                  <div className="App-header-links-item">
                    <a
                      href="https://docs.navigator.exchange/"
                      className="link-underline item-special"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Analytics
                      <span className="special">Contest</span>
                    </a>
                  </div>
                  <div className="App-header-links-item">
                    <a
                      href="https://docs.navigator.exchange/"
                      className="link-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      NFTs
                    </a>
                  </div>
                  <div className="App-header-links-item">
                    <a
                      href="https://docs.navigator.exchange/"
                      className="link-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Migrate
                    </a>
                  </div>
                </div>
              </div>
              <div className="App-header-container-right">
                <div className="App-header-user">
                  <div className="App-header-trade-link">
                    <a
                      className="default-btn"
                      href="https://app.navigator.exchange/#/trade"
                    >
                      <span>Launch App</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="App-header-responsive">
              <div className="App-header-link-container App-header-top">
                <div className="App-header-container-left">
                  <div
                    className="App-header-menu-icon-block"
                    onClick={toggleMenu}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      className="App-header-menu-icon"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
                      </g>
                    </svg>
                  </div>
                  <div className="App-header-link-main clickable">
                    <img src={MenuLogo} className="small-logo" alt=""></img>
                  </div>
                </div>
                <div className="App-header-container-right">
                  <div className="App-header-user">
                    <div className="App-header-trade-link homepage-header">
                      <a
                        class="default-btn"
                        href="https://app.navigator.exchange/#/trade"
                      >
                        <span>Launch App</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div
            className={`App-header-links-container App-header-drawer ${
              menuActive ? "active" : ""
            }`}
          >
            <div className="App-header-links menu">
              <div className="App-header-links-header">
                <a className="App-header-link-main" href="#/">
                  <img src={MenuLogo} className="small-logo" alt=""></img>
                </a>
                <div
                  class="App-header-menu-icon-block mobile-cross-menu"
                  onClick={toggleMenu}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="App-header-menu-icon menu"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </div>
              </div>
              <div className="App-header-links-item menu">
                <a
                  href="https://app.navigator.exchange/#/dashboard"
                  className="link-underline menu-btn"
                  target="_self"
                  rel="noopener noreferrer"
                >
                  Dashboard
                </a>
              </div>
              <div className="App-header-links-item menu">
                <a
                  href="https://docs.navigator.exchange/"
                  className="link-underline menu-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Perp
                </a>
              </div>
              <div className="App-header-links-item menu">
                <a
                  href="https://docs.navigator.exchange/"
                  className="link-underline menu-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Swap
                </a>
              </div>
              <div
                className={`App-header-links-item menu selected ${
                  miniMenuActive ? "active" : ""
                }`}
              >
                <div className="App-header-selected" onClick={toggleMiniMenu}>
                  <span className={`More ${miniMenuActive ? "active" : ""}`}>
                    Earn
                    <svg
                      className="arrow-menu"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="#828899"
                      class="arrow-icon-tab-header"
                    >
                      <path
                        className="arrow-menu-path"
                        d="M7.66536 11.3333L11.4181 5.83333L3.91259 5.83333L7.66536 11.3333Z"
                        fill="#828899"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div
                  className={`App-show-down ${miniMenuActive ? "active" : ""}`}
                >
                  <div className="show-down-item-container">
                    <a className="show-down-item" href="#/earn">
                      <img src={MenuItem1} alt="" />
                      <div class="show-down-wrap">
                        <span>Overview</span>
                        <span class="desc">Manage your earning</span>
                      </div>
                    </a>
                  </div>
                  <div className="show-down-item-container">
                    <a className="show-down-item" href="#/earn">
                      <img src={MenuItem2} alt="" />
                      <div class="show-down-wrap">
                        <span>Stake NAVI & esNAVI</span>
                        <span class="desc">
                          Stake Navigator governance token
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="show-down-item-container">
                    <a className="show-down-item" href="#/earn">
                      <img src={MenuItem3} alt="" />
                      <div class="show-down-wrap">
                        <span>Crypto Pool - NLP</span>
                        <span class="desc">Index by crypto asset</span>
                      </div>
                    </a>
                  </div>
                  <div className="show-down-item-container">
                    <a className="show-down-item" href="#/earn">
                      <img src={MenuItem4} alt="" />
                      <div class="show-down-wrap">
                        <span>Stable Pool - NSLP</span>
                        <span class="desc">Index by stable asset</span>
                      </div>
                    </a>
                  </div>
                  <div className="show-down-item-container">
                    <a className="show-down-item" href="#/earn">
                      <img src={MenuItem5} alt="" />
                      <div class="show-down-wrap">
                        <span>Vest</span>
                        <span class="desc">
                          Convert esNAVI tokens to NAVI tokens
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="App-header-links-item menu">
                <a
                  href="https://docs.navigator.exchange/"
                  className="link-underline menu-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vaults
                </a>
              </div>
              <div className="App-header-links-item menu">
                <a
                  href="https://docs.navigator.exchange/"
                  className="link-underline menu-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy
                </a>
              </div>
              <div className="App-header-links-item menu">
                <a
                  href="https://docs.navigator.exchange/"
                  className="link-underline menu-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Referrals
                </a>
              </div>
              <div className="App-header-links-item menu">
                <a
                  href="https://docs.navigator.exchange/"
                  className="link-underline menu-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </a>
              </div>
              <div className="App-header-links-item menu">
                <a
                  href="https://docs.navigator.exchange/"
                  className="link-underline item-menu-special"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Analytics
                  <span className="special">Contest</span>
                </a>
              </div>
              <div className="App-header-links-item menu">
                <a
                  href="https://docs.navigator.exchange/"
                  className="link-underline menu-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NFTs
                </a>
              </div>
              <div className="App-header-links-item menu">
                <a
                  href="https://docs.navigator.exchange/"
                  className="link-underline menu-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Migrate
                </a>
              </div>
            </div>
          </div>
          <div className="Wrapper">
            <Banner />
            <Info />
            <Vault />
            <Summary />
            <Ecosystem />
            <Contact />
          </div>
        </div>
      </div>
      <div className="contest-container">
        <div className="contest">
          <span className="content-container">
            <span className="contest-title">Trading Contest Is Live</span>
            <span className="stroke">-</span>
            <span>Prize: 5,000 USDC.e! 🚀</span>
          </span>
          <span className="details">
            <a
              href="https://app.navigator.exchange/#/analytics/contest"
              className="link-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Details
            </a>
          </span>
          <span className="cup">🏆</span>
        </div>
      </div>
    </>
  );
};
export default Landing;

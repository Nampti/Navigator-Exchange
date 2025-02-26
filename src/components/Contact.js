import React from "react";
import { useEffect, useRef } from "react";
import "./Contact.css";
import BG1 from "../assets/bg/bg1.png";
import Icon1 from "../assets/icon/ic_btc_40.1560513c6c41f919ca40.svg";
import Icon2 from "../assets/icon/ic_eth_40.5e255508ace6905c4815.svg";
import Icon3 from "../assets/icon/ic_link_40.1eae34cfaa873fc147be.svg";
import Icon4 from "../assets/icon/ic_xrp_40.a43157150b126197f4ea.svg";
import Icon5 from "../assets/icon/ic_bnb_40.60a43ade662a49eb0a6f.svg";
import Icon6 from "../assets/icon/ic_op_40.65b82a75d28d10046ad2.svg";
import Icon7 from "../assets/icon/ic_sol_40.05c57c8df92173152e54.svg";
import Icon8 from "../assets/icon/ic_arb_40.16344fe6cb8c2f5ee2b2.svg";
import Icon9 from "../assets/icon/ic_ordi_40.ef5704d015d3b9e7086b.svg";
import Icon10 from "../assets/icon/ic_sui_40.8da22cddbda6adef63ee.svg";
import Icon11 from "../assets/icon/ic_pepe_40.bd9000bd74341deb1549.svg";
import Icon12 from "../assets/icon/ic_s_40.71419a3de08eb33b2d5e.svg";
import Icon13 from "../assets/icon/ic_trump_40.c955c3c724c450c0d37e.svg";
import Icon14 from "../assets/icon/ic_melania_40.ca5a57f8541807653695.svg";
import Icon15 from "../assets/icon/ic_aixbt_40.3fcc611d703a308f762c.svg";
import Icon16 from "../assets/icon/ic_anon_40.2243d506c21636163e43.svg";
import Icon17 from "../assets/icon/ic_bera_40.3117bf319b1650ed320a.svg";
import Icon18 from "../assets/icon/ic_ltc_40.be25175e01352e1aed0a.svg";
import Icon19 from "../assets/icon/ic_ada_40.f49f0336db51766c5bd2.svg";
import Icon20 from "../assets/icon/ic_hype_40.94f3113eb4eb5b7a412f.svg";
import Icon21 from "../assets/icon/ic_eur_40.7ff6d43103aa2ecc3155.svg";
import Icon22 from "../assets/icon/ic_xau_40.d96c94d60cd5fd85910b.svg";
import Icon23 from "../assets/icon/ic_gbp_40.eaa1efeaa1a4a7d1ca52.svg";
import Icon24 from "../assets/icon/ic_xag_40.51412bb797e415c7c191.svg";
import Icon25 from "../assets/icon/ic_aud_40.d4190362c7a1d96161e5.svg";
import Icon26 from "../assets/icon/ic_nzd_40.7fea2bb4dfed2a0964f0.svg";
const Contact = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.remove("hidden");
          } else {
            entry.target.classList.add("hidden");
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }
    if (descRef.current) {
      observer.observe(descRef.current);
    }
    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
      if (descRef.current) {
        observer.unobserve(descRef.current);
      }
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  });
  return (
    <div className="contact">
      <div className="contact-header">
        <div style={{ background: `url(${BG1})  0% 0% / cover no-repeat` }}>
          <div className="container wrapper">
            <div className="left-contact">
              <div className="contact-title" ref={titleRef}>
                Building with the best
              </div>
              <div className="contact-desc" ref={descRef}>
                We have joined forces with the best in Web3 to provide users
                with the most reliable and powerful on-chain trading platform.
              </div>
              <button className="default-btn contact-btn" ref={buttonRef}>
                Join Us
              </button>
            </div>
            <div className="right-contact">
              <div className="rfm-marquee-container">
                <div className="rfm-marquee quick">
                  <div className="rfm-initial-child-container">
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=BTC/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon1}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=ETH/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon2}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=LINK/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon3}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=XRP/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon4}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=BNB/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon5}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=BNB/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon5}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="rfm-marquee quick">
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=ARB/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon8}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=ORDI/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon9}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=SUI/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon10}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=PEPE/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon11}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=S/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon12}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=TRUMP/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon13}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="rfm-marquee-container">
                <div className="rfm-marquee reverse quick">
                  <div className="rfm-initial-child-container">
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=BTC/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon1}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=ETH/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon2}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=LINK/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon3}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=XRP/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon4}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=BNB/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon5}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=BNB/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon5}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="rfm-marquee reverse quick">
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=ARB/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon8}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=ORDI/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon9}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=SUI/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon10}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=PEPE/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon11}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=S/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon12}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=TRUMP/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon13}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="rfm-marquee-container">
                <div className="rfm-marquee quick">
                  <div className="rfm-initial-child-container">
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=BTC/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon1}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=ETH/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon2}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=LINK/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon3}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=XRP/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon4}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=BNB/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon5}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                    <div
                      className="rfm-child"
                      style={{ "--transform": "none" }}
                    >
                      <a
                        href="https://app.navigator.exchange/#/trade?symbol=BNB/USD"
                        className="link-underline wrap-coin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="item-partner">
                          <img
                            className="icon-partner"
                            src={Icon5}
                            alt="symbol"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="rfm-marquee quick">
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=ARB/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon8}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=ORDI/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon9}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=SUI/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon10}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=PEPE/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon11}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=S/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon12}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                  <div className="rfm-child" style={{ "--transform": "none" }}>
                    <a
                      href="https://app.navigator.exchange/#/trade?symbol=TRUMP/USD"
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="item-partner">
                        <img
                          className="icon-partner"
                          src={Icon13}
                          alt="symbol"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-footer">
        <div className="container footer-container">
          <div className="info">
            <div style={{ cursor: "pointer" }}>
              <svg
                width="170"
                height="36"
                viewBox="0 0 170 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_17935_1054)">
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
            <div className="copyright">
              Copyrights © 2025 Navigator. All rights reserved.
            </div>
          </div>
          <div className="right-foot">
            <div className="box-social">
              <a
                className="item-social"
                href="https://x.com/NaviExSonic"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M3.321 2.88l6.824 9.949-7.156 8.29h1.526l6.306-7.306 5.012 7.307h4.807l-7.141-10.41 6.758-7.83h-1.524l-5.91 6.846L8.129 2.88H3.32z"
                  ></path>
                </svg>
              </a>
              <a
                className="item-social"
                href="https://medium.com/@NaviExSonic"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M20.824 5.69L22.5 4.097V3.75h-5.805l-4.137 10.22L7.852 3.75H1.765v.348l1.958 2.339c.19.173.29.425.265.68v9.19c.06.331-.049.672-.283.912L1.5 19.871v.344h6.252v-.348l-2.205-2.648a1.075 1.075 0 01-.304-.912v-7.95l5.488 11.863h.638l4.719-11.862v9.45c0 .248 0 .3-.165.463l-1.697 1.63v.349h8.236v-.348l-1.637-1.59a.481.481 0 01-.187-.464V6.153a.48.48 0 01.186-.464z"
                  ></path>
                </svg>
              </a>
              <a
                className="item-social"
                href="https://t.me/navigator_exchange"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    d="M9.633 14.863l-.364 5.026c.52 0 .746-.22 1.016-.483l2.441-2.291 5.059 3.637c.927.508 1.581.24 1.831-.838l3.32-15.275h.001c.295-1.347-.495-1.874-1.4-1.543L2.022 10.432c-1.332.507-1.311 1.236-.226 1.566l4.99 1.524 11.59-7.12c.545-.354 1.04-.158.633.197l-9.375 8.264z"
                  ></path>
                </svg>
              </a>
              <a
                className="item-social"
                href="https://discord.com/invite/23gmsJHmYx"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <g clip-path="url(#clip0_17917_6131)">
                    <path
                      fill="#000"
                      d="M20.317 4.656a19.792 19.792 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.865-.608 1.25a18.271 18.271 0 00-5.487 0 12.644 12.644 0 00-.617-1.25.077.077 0 00-.079-.037 19.737 19.737 0 00-4.885 1.515.07.07 0 00-.032.028C.533 9.332-.32 13.866.099 18.344a.083.083 0 00.031.056 19.902 19.902 0 005.993 3.03.078.078 0 00.084-.028 14.22 14.22 0 001.226-1.994c.021-.041.001-.09-.041-.106a13.109 13.109 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 01.078-.01c3.927 1.792 8.18 1.792 12.061 0a.074.074 0 01.079.009c.12.099.245.198.372.292.044.032.04.1-.006.128-.598.35-1.22.645-1.873.891a.077.077 0 00-.041.107c.36.698.772 1.363 1.225 1.993a.076.076 0 00.084.029 19.836 19.836 0 006.002-3.03.077.077 0 00.032-.055c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 00-.031-.029zM8.02 15.618c-1.182 0-2.157-1.086-2.157-2.42 0-1.333.956-2.418 2.157-2.418 1.21 0 2.176 1.095 2.157 2.419 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.086-2.157-2.42 0-1.333.955-2.418 2.157-2.418 1.21 0 2.176 1.095 2.157 2.419 0 1.333-.946 2.418-2.157 2.418z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_17917_6131">
                      <path fill="#fff" d="M0 0H24V24H0z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
            <div className="box-menu">
              <a
                className="item-menu"
                href="https://docs.navigator.exchange/"
                target="_blank"
              >
                Docs
              </a>
              <a
                className="item-menu"
                href="https://discord.com/invite/23gmsJHmYx"
                target="_blank"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;

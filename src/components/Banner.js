import React from "react";
import { useEffect, useRef } from "react";
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
import Audi from "../assets/icon/audi.png";
import Audi1 from "../assets/icon/audi1.png";
import { formatNumber } from "../utils/format";
import { CountUp } from "use-count-up";
import "./Banner.css";

const Banner = () => {
  const bannerItems = [
    {
      href: "https://app.navigator.exchange/#/trade?symbol=BTC/USD",
      src: Icon1,
      alt: "BTC/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=ETH/USD",
      src: Icon2,
      alt: "ETH/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=LINK/USD",
      src: Icon3,
      alt: "LINK/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=XRP/USD",
      src: Icon4,
      alt: "XRP/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=BNB/USD",
      src: Icon5,
      alt: "BNB/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=OP/USD",
      src: Icon6,
      alt: "OP/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=SOL/USD",
      src: Icon7,
      alt: "SOL/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=ARB/USD",
      src: Icon8,
      alt: "ARB/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=ORDI/USD",
      src: Icon9,
      alt: "ORDI/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=SUI/USD",
      src: Icon10,
      alt: "SUI/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=PEPE/USD",
      src: Icon11,
      alt: "PEPE/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=S/USD",
      src: Icon12,
      alt: "S/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=TRUMP/USD",
      src: Icon13,
      alt: "TRUMP/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=MELANIA/USD",
      src: Icon14,
      alt: "MELANIA/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=AIXBT/USD",
      src: Icon15,
      alt: "AIXBT/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=ANON/USD",
      src: Icon16,
      alt: "ANON/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=BERA/USD",
      src: Icon17,
      alt: "BERA/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=LTC/USD",
      src: Icon18,
      alt: "LTC/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=ADA/USD",
      src: Icon19,
      alt: "ADA/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=HYPE/USD",
      src: Icon20,
      alt: "HYPE/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=EUR/USD",
      src: Icon21,
      alt: "EUR/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=XAU/USD",
      src: Icon22,
      alt: "XAU/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=GBP/USD",
      src: Icon23,
      alt: "GBP/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=XAG/USD",
      src: Icon24,
      alt: "XAG/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=AUD/USD",
      src: Icon25,
      alt: "AUD/USD",
    },
    {
      href: "https://app.navigator.exchange/#/trade?symbol=NZD/USD",
      src: Icon26,
      alt: "NZD/USD",
    },
  ];
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const audiLeftRef = useRef(null);
  const audiRightRef = useRef(null);
  const wrapOverviewContainerRef = useRef(null);
  const itemOverviewRefs = useRef([]);

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

    // Store ref elements in variables
    const titleElement = titleRef.current;
    const descElement = descRef.current;
    const buttonElement = buttonRef.current;
    const audiLeftElement = audiLeftRef.current;
    const audiRightElement = audiRightRef.current;
    const wrapOverviewElement = wrapOverviewContainerRef.current;
    const itemElements = itemOverviewRefs.current.filter((ref) => ref !== null);

    // Observe elements
    if (titleElement) observer.observe(titleElement);
    if (descElement) observer.observe(descElement);
    if (buttonElement) observer.observe(buttonElement);
    if (audiLeftElement) observer.observe(audiLeftElement);
    if (audiRightElement) observer.observe(audiRightElement);
    if (wrapOverviewElement) observer.observe(wrapOverviewElement);
    itemElements.forEach((element) => observer.observe(element));

    return () => {
      // Unobserve elements using stored references
      if (titleElement) observer.unobserve(titleElement);
      if (descElement) observer.unobserve(descElement);
      if (buttonElement) observer.unobserve(buttonElement);
      if (audiLeftElement) observer.unobserve(audiLeftElement);
      if (audiRightElement) observer.unobserve(audiRightElement);
      if (wrapOverviewElement) observer.unobserve(wrapOverviewElement);
      itemElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div className="banner">
      <div className="overplay"></div>
      <div className="banner-wrap">
        <div className="bg-banner"></div>
        <div className="wrap-title">
          <div className="title-banner container">
            <div className="wrap-border-left">
              <div className="border">
                <div className="border-child-top-left"></div>
                <div className="border-child-bottom-left"></div>
              </div>
            </div>
            <div className="wrap-border-right">
              <div className="border">
                <div className="border-child-top-right"></div>
                <div className="border-child-bottom-right"></div>
              </div>
            </div>
            <div className="box-title">
              <div className={`banner-title`} ref={titleRef}>
                Decentralized Liquidity Marketplace
              </div>
              <div className={`banner-desc`} ref={descRef}>
                Effortless trading, continuous liquidity. Across Crypto, Forex,
                and beyond.
              </div>
            </div>
            <a
              href="https://app.navigator.exchange/#/trade"
              className="default-btn banner-btn"
              ref={buttonRef}
              style={{ opacity: 1, transform: "none", willChange: "transform" }}
            >
              Start Trading
            </a>
          </div>
          <div className="rfm-marquee-container">
            <div className="rfm-marquee">
              <div className="rfm-initial-child-container">
                {bannerItems.map((item, index) => (
                  <div
                    className="rfm-child-banner"
                    style={{ "--transform": "none" }}
                    key={index}
                  >
                    <a
                      href={item.href}
                      className="link-underline wrap-coin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div>
                        <img
                          className="coin-img"
                          src={item.src}
                          alt={item.alt}
                        />
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="rfm-marquee">
              {bannerItems.map((item, index) => (
                <div
                  className="rfm-child"
                  style={{ "--transform": "none" }}
                  key={index}
                >
                  <a
                    href={item.href}
                    className="link-underline wrap-coin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <img className="coin-img" src={item.src} alt={item.alt} />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="audited container">
          <div className="audi-item left" ref={audiLeftRef}>
            <div className="audi-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                fill="none"
                viewBox="0 0 17 16"
              >
                <path
                  fill="#90FB75"
                  d="M8.658 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm-.75 9l-2.75-2.75.5-.75 2.25 1.5 3.49-3 .76.75-4.25 4.25z"
                ></path>
              </svg>
              Audited by
            </div>
            <a
              href="https://github.com/verichains/public-audit-reports/blob/main/Verichains%20Public%20Audit%20Report%20-%20Mummy%20Finance%20-%20v1.0.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Audi} alt="" />
            </a>
          </div>
          <div className="wall"></div>
          <div className="audi-item right" ref={audiRightRef}>
            <div className="audi-text">Powered by</div>
            <a href="https://pyth.network/" target="_blank" rel="noreferrer">
              <img src={Audi1} alt="" />
            </a>
          </div>
        </div>
        <div
          className="container wrap-overview-container"
          ref={wrapOverviewContainerRef}
        >
          <div
            className="item-overview"
            ref={(el) => (itemOverviewRefs.current[0] = el)}
          >
            <div className="overview-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="none"
                viewBox="0 0 36 36"
              >
                <path fill="#000" d="M4.154 12.461H6.923V33.23H4.154z"></path>
                <path
                  fill="#000"
                  d="M12.462 16.615H15.231V33.23H12.462z"
                ></path>
                <path
                  fill="#000"
                  d="M20.77 9.692H23.539V33.230000000000004H20.77z"
                ></path>
                <path
                  fill="#000"
                  d="M29.077 6.923H31.846000000000004V33.231H29.077z"
                ></path>
              </svg>
            </div>
            <div className="overview-info">
              <div className="overview-value">
                $
                <CountUp
                  isCounting
                  end={181277164}
                  duration={1}
                  formatter={formatNumber}
                />
              </div>
              <div className="overview-title">Total Volume</div>
            </div>
          </div>
          <div
            className="item-overview"
            ref={(el) => (itemOverviewRefs.current[1] = el)}
          >
            <div className="overview-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="none"
                viewBox="0 0 36 36"
              >
                <path
                  fill="#000"
                  fill-rule="evenodd"
                  d="M16.5 3A7.5 7.5 0 009 10.5v1.689A6.003 6.003 0 004.5 18v9a6 6 0 006 6h15a6 6 0 006-6v-9a6.003 6.003 0 00-4.5-5.811V10.5A7.5 7.5 0 0019.5 3h-3zm7.5 9v-1.5A4.5 4.5 0 0019.5 6h-3a4.5 4.5 0 00-4.5 4.5V12h12zm-13.5 3h15a3 3 0 013 3v9a3 3 0 01-3 3h-15a3 3 0 01-3-3v-9a3 3 0 013-3z"
                  clip-rule="evenodd"
                ></path>
                <mask id="path-2-inside-1_17917_5803" fill="#fff">
                  <path
                    fill-rule="evenodd"
                    d="M19.5 23.599A2.999 2.999 0 0018 18a3 3 0 00-1.5 5.599v2.151c0 .69.672 1.25 1.5 1.25s1.5-.56 1.5-1.25v-2.151z"
                    clip-rule="evenodd"
                  ></path>
                </mask>
                <path
                  fill="#000"
                  fill-rule="evenodd"
                  d="M19.5 23.599A2.999 2.999 0 0018 18a3 3 0 00-1.5 5.599v2.151c0 .69.672 1.25 1.5 1.25s1.5-.56 1.5-1.25v-2.151z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#000"
                  d="M19.5 23.599l-.5-.866-.5.289v.577h1zm-3 0h1v-.577l-.5-.289-.5.866zM20 21c0 .739-.4 1.386-1 1.733l1 1.731c1.194-.69 2-1.982 2-3.464h-2zm-2-2a2 2 0 012 2h2a4 4 0 00-4-4v2zm-2 2a2 2 0 012-2v-2a4 4 0 00-4 4h2zm1 1.733c-.6-.347-1-.994-1-1.733h-2c0 1.482.806 2.774 2 3.464l1-1.731zm.5 3.017v-2.151h-2v2.151h2zm.5.25a.662.662 0 01-.42-.134c-.08-.067-.08-.113-.08-.116h-2c0 1.406 1.298 2.25 2.5 2.25v-2zm.5-.25c0 .003 0 .049-.08.116A.662.662 0 0118 26v2c1.202 0 2.5-.844 2.5-2.25h-2zm0-2.151v2.151h2v-2.151h-2z"
                  mask="url(#path-2-inside-1_17917_5803)"
                ></path>
              </svg>
            </div>
            <div className="overview-info">
              <div className="overview-value">
                $
                <CountUp
                  isCounting
                  end={1812771}
                  duration={1}
                  formatter={formatNumber}
                />
              </div>
              <div className="overview-title">Total Value Locked</div>
            </div>
          </div>
          <div
            className="item-overview"
            ref={(el) => (itemOverviewRefs.current[2] = el)}
          >
            <div className="overview-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="none"
                viewBox="0 0 36 36"
              >
                <path
                  fill="#000"
                  d="M27.345 6v4.033h-2.052V6h2.052zm-.25 22.323V32h-2.052v-3.677h2.052zm1.448-4.484c0-.52-.092-.961-.277-1.326-.175-.364-.465-.688-.868-.97-.395-.283-.93-.556-1.605-.82a22.278 22.278 0 01-3.014-1.45c-.86-.52-1.53-1.162-2.013-1.927-.482-.775-.723-1.754-.723-2.94 0-1.13.258-2.109.776-2.938a5.124 5.124 0 012.145-1.914c.92-.456 1.99-.683 3.21-.683.93 0 1.772.145 2.527.437a5.273 5.273 0 011.947 1.258c.544.546.96 1.216 1.25 2.01.29.792.434 1.699.434 2.72h-3.776c0-.547-.057-1.03-.171-1.45-.114-.419-.281-.77-.5-1.052a1.968 1.968 0 00-.764-.629 2.216 2.216 0 00-.986-.219c-.535 0-.974.11-1.316.328a1.918 1.918 0 00-.75.889 3.3 3.3 0 00-.224 1.258c0 .464.08.87.237 1.216.167.346.452.665.855.957.404.283.956.574 1.658.875 1.14.456 2.14.948 3 1.476.86.529 1.53 1.176 2.013 1.941.483.766.724 1.741.724 2.926 0 1.175-.263 2.178-.79 3.007-.526.82-1.263 1.45-2.21 1.887-.947.428-2.044.642-3.29.642-.807 0-1.61-.11-2.407-.328a6.388 6.388 0 01-2.171-1.094c-.65-.5-1.167-1.166-1.553-1.995-.386-.839-.579-1.869-.579-3.09h3.79c0 .665.083 1.221.25 1.668.166.437.386.788.657 1.052.281.256.597.438.948.547.35.11.706.164 1.066.164.561 0 1.021-.104 1.381-.314.369-.21.645-.497.83-.861a2.7 2.7 0 00.289-1.258z"
                ></path>
                <path
                  fill="#000"
                  fill-rule="evenodd"
                  d="M5.122 5.706l-2.12 2.119 7.248 7.247-1.698 1.697 7.529 2.017-2.018-7.528-1.695 1.695-7.246-7.247zM5.113 17.007l-2.107 2.107 7.247 7.247-1.702 1.703 7.528 2.017-2.017-7.529-1.702 1.702-7.247-7.247z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="overview-info">
              <div className="overview-value">
                $
                <CountUp
                  isCounting
                  end={181277164}
                  duration={1}
                  formatter={formatNumber}
                />
              </div>
              <div className="overview-title">Total Fees</div>
            </div>
          </div>
          <div
            className="item-overview"
            ref={(el) => (itemOverviewRefs.current[3] = el)}
          >
            <div className="overview-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="none"
                viewBox="0 0 30 28"
              >
                <path
                  fill="#000"
                  d="M22.105 17.947h-15V14L0 20.71l7.105 6.711v-3.947h15v-5.527zM30 7.29L22.895.58v3.946h-15v5.527h15V14L30 7.29zM4.737 4.526H1.579v5.527h3.158V4.526zM28.42 17.948h-3.157v5.526h3.158v-5.526z"
                ></path>
              </svg>
            </div>
            <div className="overview-info">
              <div className="overview-value">
                $
                <CountUp
                  isCounting
                  end={177164}
                  duration={1}
                  formatter={formatNumber}
                />
              </div>
              <div className="overview-title">Open Interest</div>
            </div>
          </div>
          <div
            className="item-overview"
            ref={(el) => (itemOverviewRefs.current[4] = el)}
          >
            <div className="overview-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="none"
                viewBox="0 0 30 22"
              >
                <path
                  fill="#000"
                  d="M15.001.621a5.591 5.591 0 100 11.182A5.591 5.591 0 0015 .621zM7.83 3.052c-2.796.219-4.936 2.723-4.571 5.616.292 2.188 2.042 3.962 4.23 4.278a5.07 5.07 0 002.966-.486c.292-.146.34-.583.097-.802a6.957 6.957 0 01-2.6-5.446c0-.875.17-1.726.461-2.504a.489.489 0 00-.462-.656H7.83zm14.221 0c-.34 0-.583.34-.462.656.292.778.462 1.63.462 2.504a7.011 7.011 0 01-2.577 5.446c-.267.219-.218.632.098.802.875.438 1.871.656 2.965.486 2.213-.316 3.963-2.09 4.23-4.303.365-2.917-1.848-5.445-4.668-5.59h-.048zm-7.05 10.697c-3.646 0-7.074 1.798-9.116 4.789a3.594 3.594 0 00-.608 2.042c0 .389.34.705.73.705h17.989c.389 0 .73-.316.73-.705a3.369 3.369 0 00-.609-2.042c-2.042-2.99-5.47-4.79-9.116-4.79zm-8.833.982a.53.53 0 00-.089.014 9.815 9.815 0 00-5.956 3.987.716.716 0 00.608 1.094H3.26a.701.701 0 00.68-.534c.098-.438.268-.852.511-1.24v-.025c.584-.924 1.289-1.726 2.067-2.455.342-.32.085-.873-.349-.841zm17.642.004c-.434-.012-.69.54-.349.837a12.944 12.944 0 011.92 2.212c.049.073.122.17.195.292.219.389.389.778.51 1.216.073.316.365.51.681.51h2.529c.559 0 .899-.608.583-1.07a9.937 9.937 0 00-5.98-3.987.522.522 0 00-.09-.01z"
                ></path>
              </svg>
            </div>
            <div className="overview-info">
              <div className="overview-value">
                <CountUp
                  isCounting
                  end={3823}
                  duration={1}
                  formatter={formatNumber}
                />
              </div>
              <div className="overview-title">c</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

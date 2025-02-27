import React from "react";
import { useEffect, useRef } from "react";
import "./Summary.css";
import summary from "../assets/icon/summary.svg";
const Summary = () => {
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);

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

    const elements = [
      titleRef.current,
      descRef.current,
      containerRef.current,
      ...itemRefs.current,
    ];

    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);
  return (
    <div className="summary">
      <div className="container summary-container">
        <div className="box-title-summary">
          <div className="title-summary" ref={titleRef}>
            Available on your preferred network
          </div>
          <div className="desc-summary" ref={descRef}>
            Navigator is currently live on Sonic Mainnet.
          </div>
        </div>
        <div className="box-content-summary" ref={containerRef}>
          <div
            className="box-item-summary"
            ref={(el) => (itemRefs.current[0] = el)}
          >
            <div className="box-info-summary">
              <img src={summary} className="img-box"></img>
              <div>Sonic</div>
            </div>
            <div className="wall-summary"></div>
            <div className="wrap-value-summary">
              <div className="box-value-summary">
                <div className="title-value-summary">Total Volume</div>
                <div className="price-summary">
                  <span>$178,517,143</span>
                </div>
              </div>
              <div className="box-value-summary">
                <div className="title-value-summary">Total Volume</div>
                <div className="price-summary">
                  <span>$178,517,143</span>
                </div>
              </div>
              <div className="box-value-summary">
                <div class="title-value-summary">Total Fees</div>
                <div class="price-summary">
                  <span>$341,771</span>
                </div>
              </div>
            </div>
            <a
              href="https://app.navigator.exchange/#/trade"
              class="default-btn btn"
            >
              Launch App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Summary;

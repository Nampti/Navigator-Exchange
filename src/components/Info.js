import React, { useRef, useEffect } from "react";
import Info1 from "../assets/icon/info.png";
import Info2 from "../assets/icon/info1.png";
import Info3 from "../assets/icon/info2.png";
import Info4 from "../assets/icon/info3.png";
import Info5 from "../assets/icon/info4.png";
import "./Info.css";

const Info = () => {
  const titleRef = useRef(null);
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

    const titleEl = titleRef.current;
    const itemEls = itemRefs.current;

    if (titleEl) observer.observe(titleEl);
    itemEls.forEach((ref) => ref && observer.observe(ref));

    return () => {
      if (titleEl) observer.unobserve(titleEl);
      itemEls.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <div className="info">
      <div className="info-title" ref={titleRef}>
        Protocol strengths
      </div>
      <div className="container wrapper">
        <div>
          <div>
            <div
              className="item-protocol protocol-left"
              ref={(el) => (itemRefs.current[0] = el)}
            >
              <div className="box-title-info">
                <div className="title-protocol">CEX-like Trading Features</div>
                <div>
                  Navigator empowers you with exclusive position management
                  tools, including TP/SL order, collateral adjustment, leverage
                  modification, position size increase, and trailing stop.
                </div>
              </div>
              <img className="img-protocol" src={Info1} alt="protocol"></img>
            </div>
            <div className="line-left"></div>
          </div>
          <div>
            <div
              className="item-protocol protocol-left"
              ref={(el) => (itemRefs.current[1] = el)}
            >
              <div className="box-title-info">
                <div className="title-protocol">
                  High-Leverage Perpetuals, All Assets
                </div>
                <div>
                  Navigator lets you trade crypto, forex, and commodities. Take
                  advantage of up to 100x leverage, to maximize your trading
                  opportunities.
                </div>
              </div>
              <img className="img-protocol" src={Info2} alt="protocol"></img>
            </div>
          </div>
        </div>
        <div className="mid-protocol">
          <div className="line-top"></div>
          <img src={Info3} alt="protocol"></img>
          <div className="line-bottom"></div>
        </div>
        <div>
          <div>
            <div
              className="item-protocol"
              ref={(el) => (itemRefs.current[2] = el)}
            >
              <img className="img-protocol" src={Info4} alt="protocol"></img>
              <div className="box-title-info title-right">
                <div className="title-protocol">
                  Double Trading Liquidity Pools
                </div>
                <div className="desc-right">
                  Trading orders on Navigator are executed across two
                  specialized liquidity pools: one for blue-chip assets and
                  another exclusively for stablecoins.
                </div>
              </div>
            </div>
            <div className="line-right"></div>
          </div>
          <div>
            <div
              className="item-protocol"
              ref={(el) => (itemRefs.current[3] = el)}
            >
              <img className="img-protocol" src={Info5} alt="protocol"></img>
              <div className="box-title-info title-right">
                <div className="title-protocol">
                  SAFU, Transparency and Secured
                </div>
                <div className="desc-right">
                  Navigator uses Pyth to protect against fraudulent trading and
                  manipulation. Your funds are self-custodied. All smart
                  contracts are open-source, transparent and audited.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

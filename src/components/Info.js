import React from "react";
import Info1 from "../assets/icon/info.png";
import Info2 from "../assets/icon/info1.png";
import Info3 from "../assets/icon/info2.png";
import Info4 from "../assets/icon/info3.png";
import Info5 from "../assets/icon/info4.png";
import "./Info.css"
const Info = () => {
  return (
    <div className="info">
      <div className="title">Protocol strengths</div>
      <div className="container wrapper">
        <div>
          <div>
            <div className="item-protocol protocol-left">
              <div className="box-title">
                <div className="title-protocol">CEX-like Trading Features</div>
                <div>
                  Navigator empowers you with exclusive position management
                  tools, including TP/SL order, collateral adjustment, leverage
                  modification, position size increase, and trailing stop.
                </div>
              </div>
              <img className="img-protocol" src={Info1}></img>
            </div>
            <div className="line-left"></div>

          </div>
          <div>
            <div className="item-protocol protocol-left">
              <div className="box-title">
                <div className="title-protocol">High-Leverage Perpetuals, All Assets</div>
                <div>
                Navigator lets you trade crypto, forex, and commodities. Take advantage of up to 100x leverage, to maximize your trading opportunities.
                </div>
              </div>
              <img className="img-protocol" src={Info2}></img>

            </div>
          </div>
        </div>
        <div className="mid-protocol">
          <div className="line-top"></div>
          <img src={Info3} alt=""></img>
          <div className="line-bottom"></div>
        </div>
        <div>
          <div>
            <div className="item-protocol">
            <img className="img-protocol" src={Info4}></img>
              <div className="box-title title-right">
                <div className="title-protocol">Double Trading Liquidity Pools</div>
                <div className="desc-right">
                  Trading orders on Navigator are executed across two specialized liquidity pools: one for blue-chip assets and another exclusively for stablecoins.
                </div>
              </div>
            </div>
            <div className="line-right"></div>
          </div>
          <div>
            <div className="item-protocol">
              <img className="img-protocol" src={Info5}></img>
              <div className="box-title title-right">
                <div className="title-protocol">SAFU, Transparency and Secured</div>
                <div className="desc-right">
                Navigator uses Pyth to protect against fraudulent trading and manipulation. Your funds are self-custodied. All smart contracts are open-source, transparent and audited.
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

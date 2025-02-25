import React from "react";
import Info1 from "../assets/icon/info.png";
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
        </div>
      </div>
    </div>
  );
};
export default Info;

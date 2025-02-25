import React from 'react';
import "./Summary.css";
import summary from "../assets/icon/summary.svg"
const Summary = () => {
    return (
        <div className="summary">

        <div className="container summary-container">
            <div className="box-title">
                <div className="title">
                    Available on your preferred network
                </div>
                <div className="desc">
                    Navigator is currently live on Sonic Mainnet.
                </div>
            </div>
            <div className="box-content">
                <div className="box-item">
                    <div className="box-info">
                        <img src={summary} className="img-box"></img>
                        <div>Sonic</div>

                    </div>
                    <div className="wall"></div>
                    <div className="wrap-value">
                        <div className="box-value">
                            <div className="title-value">Total Volume</div>
                            <div className="price">
                                <span>$178,517,143</span>
                            </div>
                        </div>
                        <div className="box-value">
                            <div className="title-value">Total Volume</div>
                            <div className="price">
                                <span>$178,517,143</span>
                            </div>
                        </div>
                        <div className="box-value">
                            <div class="title-value">Total Fees</div>
                            <div class="price"><span>$341,771</span></div>
                        </div>
                    </div>
                    <a href="https://app.navigator.exchange/#/trade" class="default-btn btn">Launch App</a>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Summary;
import React from 'react';
import './Ecosystem.css';
import Eco1 from "../assets/icon/eco1.svg";
import Eco2 from "../assets/icon/eco2.svg";
const Ecosystem = () => {
    return (
        <div className="ecosystem">
            <div className="container ecosystem-wrapper">
                <div className="title">
                    Ecosystem tokens
                </div>
                <div className="wrap-box">
                    <div className="box-item-eco">
                        <div className="box-info-eco">
                            <img className="icon" src={Eco1} alt=''></img>
                            <div>
                                <div className="name">NAVI</div>
                                <div className="price">
                                    <span className="sub-price">Price: </span>
                                    $1.84
                                </div>
                            </div>

                        </div>
                        <div className="desc">Navigator Exchange governance token</div>
                        <div className="box-apr">
                            <div className="apr-item">
                                <img src={Eco2} alt='' className="img-apr"></img>
                                <div className="apr-percent">
                                    <span className="sub-apr">APR</span>
                                    <span>65.73%</span>
                                </div>
                            </div>
                        </div>
                        <div className="group-btn">
                            <button class="default-btn btn-network">Buy</button>
                            <button class="btn-outline-landing btn-network">Read More</button>
                        </div>
                    </div>
                    <div className="box-item-eco">
                        <div className="box-info-eco">
                            <img className="icon" src={Eco1} alt=''></img>
                            <div>
                                <div className="name">NAVI</div>
                                <div className="price">
                                    <span className="sub-price">Price: </span>
                                    $1.84
                                </div>
                            </div>

                        </div>
                        <div className="desc">Navigator Exchange governance token</div>
                        <div className="box-apr">
                            <div className="apr-item">
                                <img src={Eco2} alt='' className="img-apr"></img>
                                <div className="apr-percent">
                                    <span className="sub-apr">APR</span>
                                    <span>65.73%</span>
                                </div>
                            </div>
                        </div>
                        <div className="group-btn">
                            <button class="default-btn btn-network">Buy</button>
                            <button class="btn-outline-landing btn-network">Read More</button>
                        </div>
                    </div>
                    <div className="box-item-eco">
                        <div className="box-info-eco">
                            <img className="icon" src={Eco1} alt=''></img>
                            <div>
                                <div className="name">NAVI</div>
                                <div className="price">
                                    <span className="sub-price">Price: </span>
                                    $1.84
                                </div>
                            </div>

                        </div>
                        <div className="desc">Navigator Exchange governance token</div>
                        <div className="box-apr">
                            <div className="apr-item">
                                <img src={Eco2} alt='' className="img-apr"></img>
                                <div className="apr-percent">
                                    <span className="sub-apr">APR</span>
                                    <span>65.73%</span>
                                </div>
                            </div>
                        </div>
                        <div className="group-btn">
                            <button class="default-btn btn-network">Buy</button>
                            <button class="btn-outline-landing btn-network">Read More</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

}
export default Ecosystem;
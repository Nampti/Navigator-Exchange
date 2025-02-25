import React from "react";
import Vault1 from "../assets/icon/vault1.png";
import Vault2 from "../assets/icon/vault2.png";
import Vault3 from "../assets/icon/vault3.png";
import Vault4 from "../assets/icon/vault4.png";
import Vault5 from "../assets/icon/vault5.svg";
import Vault6 from "../assets/icon/vault6.svg";
import Vault7 from "../assets/icon/vault7.svg";
import Vault8 from "../assets/icon/vault8.svg";
import "./Vault.css";
const Vault = () => {

    return (
        <div className="vault">
            <img src={Vault1} className="left-small"></img>
            <img src={Vault2} className="left-big"></img>
            <img src={Vault3} className="right-small"></img>
            <img src={Vault4} className="right-big"></img>
            <div className="wrapper container vault-container">
                <div className="left-vault">
                    <div className="title-left">
                        <div>Maximize Your Yield</div>
                        <div className="title-left-sub">
                            With
                            <div className="vault-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" fill="none" viewBox="0 0 49 49"><path fill="#000" d="M9 8.5c-2.48 0-4.5 2.02-4.5 4.5v23c0 2.48 2.02 4.5 4.5 4.5h1.543a2.5 2.5 0 004.91 0h18.09a2.5 2.5 0 004.91 0H40c2.48 0 4.5-2.02 4.5-4.5V13c0-2.48-2.02-4.5-4.5-4.5H9zm5.992 7.992c.64 0 1.282.243 1.77.73l1.691 1.692a6.296 6.296 0 014.094 0l1.691-1.691a2.505 2.505 0 013.54 0 2.505 2.505 0 010 3.539l-1.665 1.66c.244.658.387 1.356.387 2.078 0 .722-.145 1.418-.387 2.074l1.664 1.664a2.5 2.5 0 01-3.535 3.535l-1.664-1.66a5.975 5.975 0 01-2.078.387 5.991 5.991 0 01-2.074-.387l-1.664 1.664a2.491 2.491 0 01-1.77.73 2.491 2.491 0 01-1.77-.73 2.505 2.505 0 010-3.539l1.665-1.66A5.967 5.967 0 0114.5 24.5c0-.722.143-1.42.387-2.078l-1.664-1.66a2.503 2.503 0 010-3.54 2.496 2.496 0 011.77-.73zM37 18.5a2.5 2.5 0 012.5 2.5v7a2.5 2.5 0 01-5 0v-7a2.5 2.5 0 012.5-2.5z"></path></svg>
                            Vault
                            </div>
                        </div>
                    </div>
                    <div>Our cutting-edge auto-compound Yield Farming strategy, designed to empower investors to earn rewards effortlessly.</div>
                    
                </div>
                <div className="right-vault">
                    <div className="box-item-vault">
                        <div  className="item-left">
                            <div>
                                <img className="img-coin" src={Vault5}></img>
                            </div>
                            <div className="wrap-value-vault">
                                <div className="name-coin">NAVI</div>
                                <div className="boxes">
                                    <div className="box-value-vault">
                                        <div className="sub-title">
                                            APY
                                        </div>
                                        79.56%
                                    </div>
                                    <div className="box-value-vault">
                                        <div className="sub-title">Daily</div>
                                        0.17%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="https://app.navigator.exchange/#/vault" class="border-btn btn-earn" rel="noreferrer">Earn Now</a>
                    </div>
                    <div className="box-item-vault">
                        <div className="item-left">
                            <div>
                                <img className="img-coin" src={Vault6}></img>
                            </div>
                            <div className="wrap-value-vault">
                                <div className="name-coin">NLP</div>
                                <div className="boxes">
                                    <div className="box-value-vault">
                                        <div className="sub-title">
                                        APY
                                        </div>
                                        341.04%
                                    </div>
                                    <div className="box-value-vault">
                                        <div className="sub-title">Daily</div>
                                        0.54%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="https://app.navigator.exchange/#/vault" class="border-btn btn-earn" rel="noreferrer">Earn Now</a>
                    </div>
                    <div className="box-item-vault">
                        <div  className="item-left">
                            <div>
                                <img className="img-coin" src={Vault7}></img>
                            </div>
                            <div className="wrap-value">
                                <div className="name-coin">NAVI</div>
                                <div className="boxes">
                                    <div className="box-value-vault">
                                        <div className="sub-title">
                                            APY
                                        </div>
                                        --%
                                    </div>
                                    <div className="box-value-vault">
                                        <div className="sub-title">Daily</div>
                                        --%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button disabled class="border-btn btn-earn">Coming Soon</button>
                    </div>
                    <div className="box-item-vault">
                        <div  className="item-left">
                            <div>
                                <img className="img-coin" src={Vault8}></img>
                            </div>
                            <div className="wrap-value">
                                <div className="name-coin">NAVI</div>
                                <div className="boxes">
                                    <div className="box-value-vault">
                                        <div className="sub-title">
                                            APY
                                        </div>
                                        --%
                                    </div>
                                    <div className="box-value-vault">
                                        <div className="sub-title">Daily</div>
                                        --%
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button disabled class="border-btn btn-earn">Coming Soon</button>
                    </div>
                </div>
            </div>
        </div>
    )


}
export default Vault;
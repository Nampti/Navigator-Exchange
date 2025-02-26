import React from "react";
import "./Ecosystem.css";
import { useEffect, useRef } from "react";
import Eco1 from "../assets/icon/eco1.svg";
import Eco2 from "../assets/icon/eco2.svg";
const Ecosystem = () => {
  const titleRef = useRef(null);
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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    itemRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }

      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      itemRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);
  return (
    <div className="ecosystem">
      <div className="container ecosystem-wrapper">
        <div className="title-eco" ref={titleRef}>
          Ecosystem tokens
        </div>
        <div className="wrap-box-eco" ref={containerRef}>
          <div
            className="box-item-eco"
            ref={(el) => (itemRefs.current[0] = el)}
          >
            <div className="box-info-eco">
              <img className="icon" src={Eco1} alt=""></img>
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
                <img src={Eco2} alt="" className="img-apr"></img>
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
          <div
            className="box-item-eco"
            ref={(el) => (itemRefs.current[1] = el)}
          >
            <div className="box-info-eco">
              <img className="icon" src={Eco1} alt=""></img>
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
                <img src={Eco2} alt="" className="img-apr"></img>
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
          <div
            className="box-item-eco"
            ref={(el) => (itemRefs.current[2] = el)}
          >
            <div className="box-info-eco">
              <img className="icon" src={Eco1} alt=""></img>
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
                <img src={Eco2} alt="" className="img-apr"></img>
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
};
export default Ecosystem;

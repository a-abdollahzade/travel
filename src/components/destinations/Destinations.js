import React from "react";
import "./DestinationsStyle.css";

import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";

function Destinations() {
  return (
    <div name="destinations" className="destinations">
      <div className="container">
        <h1>Lorem Ipsum is simply</h1>
        <h3>Lorem Ipsum is simply dummy text</h3>
        <div className="img-container">
          <div className="card">
            <div>
              <img src={BoraBora} alt="/" />
            </div>
            <div className="card-body">
              <h4 className="card-header">
                <span>Birmingham</span>
              </h4>
              <h4 className="tag">
                <span>United Kingdom</span>
              </h4>
              <div className="card-text">
                <p>jul 20-24 4 nights</p>
                <p>$540</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={BoraBora2} alt="/" />
            </div>
            <div className="card-body">
              <h4 className="card-header">
                <span>Birmingham</span>
              </h4>
              <h4 className="tag">
                <span>United Kingdom</span>
              </h4>
              <div className="card-text">
                <p>jul 20-24 4 nights</p>
                <p>$540</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <img src={Maldives} alt="/" />
            </div>
            <div className="card-body">
              <h4 className="card-header">
                <span>Birmingham</span>
              </h4>
              <h4 className="tag">
                <span>United Kingdom</span>
              </h4>
              <div className="card-text">
                <p>jul 20-24 4 nights</p>
                <p>$540</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button>view all</button>
    </div>
  );
}

export default Destinations;

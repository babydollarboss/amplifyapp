import React from "react";
import logo from "./logo.svg";
import telegram from "./telegram.svg";
import "./App.css";
import { TweetIcon } from "./components/SVGImages";

function App() {
  return (
    <div className="page-container">
      <div className="header">
        Contract:
        <a
          href="https://bscscan.com/address/0x4E833a1BDEEb75b3778Cf1637a0Af420786C3099"
          target="_blank"
          rel="noreferrer"
        >
          0x4E833a1BDEEb75b3778Cf1637a0Af420786C3099
        </a>
      </div>
      <div className="content-wrapper">
        <img src={logo} className="logo" alt="logo" />
        <div className="head-line__text">
          <span>BABY DOLLAR</span>
          <span className="glow">BABY DOLLAR</span>
        </div>
        <div className="head-line__coming-soon">$BABYDOLLAR</div>
      </div>
      <div className="social-links">
        <a href="https://t.me/babydollarChat" target="_blank" rel="noreferrer">
          <img src={telegram} className="social-icon" alt="logo" />
        </a>
        <a href="https://twitter.com/BabyDollarBSC" target="_blank" rel="noreferrer">
          <TweetIcon />
        </a>
      </div>
    </div>
  );
}

export default App;

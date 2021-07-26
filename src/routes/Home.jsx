import React from "react";
import styled from "styled-components";

import { LogoIcon } from "../components/SVGImages";

const HomeContainer = styled.div`
  transition: all 0.3s ease;
  animation: fadeInTransition 0.5s ease forwards;
  opacity: 0;
  transform: scale(0);
  max-width: 100%;
  &.hidden {
    animation: fadeOutTransition 0.5s ease forwards;
  }
  .content {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 380px;
    max-width: 40%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .logo svg {
    z-index: 1;
  }
  .logo svg.glow {
    position: absolute;
    filter: blur(40px) brightness(100);
    transform: scale(0.9);
  }
  .headline {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    margin: 20px;
  }
  .headline-text {
    font-size: 44px;
    font-family: "Audiowide";
  }
  .headline-text .glow {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 7px #fff, 0 0 20px #fbff00,
      0 0 17px #f90, 0 0 0px #f90, 0 0 0px #f90, 0 0 0px #f90;
  }
  .headline-desc {
    font-size: 24px;
    color: #fff;
    margin: 30px 0;
    font-weight: bolder;
    opacity: 0.4;
    font-family: monospace;
    max-width: calc(100% - 30px);
  }
  .headline-buttons {
    display: flex;
    flex-direction: row;
  }
  .headline-buttons a {
    background: none;
    border: none;
    border-style: solid;
    border-width: 2px;
    border-color: #fff;
    height: 50px;
    min-width: 150px;
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
    letter-spacing: 2px;
    font-size: 18px;
    opacity: 0.9;
    transition: all 0.3s ease;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Audiowide";
    font-weight: bold;
  }
  .headline-buttons a:hover {
    color: black;
    background: white;
    transition: all 0.3s ease;
  }
  .headline-buttons a.secondary {
    border-color: var(--color-brand-primary);
    margin-left: 20px;
    background: var(--color-brand-primary);
    color: black;
  }
  .headline-buttons a.secondary:hover {
    color: black;
    background: var(--color-brand-primary);
    transition: all 0.3s ease;
    transform: scale(1.05);
  }
  @media (max-width: 1000px) {
    .headline-text {
      font-size: 34px;
    }
  }
  @media (max-width: 800px) {
    .headline-text {
      font-size: 24px;
    }
    .headline-desc {
      font-size: 16px;
    }
    .content {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .headline-buttons {
      justify-content: center;
    }
    .headline-text div {
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 480px) {
    .headline {
      align-items: center;
    }
    .logo {
      max-width: 35%;
    }
    .headline-buttons a {
      font-size: 16px;
      height: 45px;
      min-width: 130px;
    }
  }
`;

export function Home({ visible }) {
  return (
    <HomeContainer className={!visible ? "hidden" : ""}>
      <div className="content">
        <div className="logo">
          <LogoIcon className="glow" />
          <LogoIcon />
        </div>
        <div className="headline">
          <div className="headline-text">
            <div>
              HOLD <span className="glow">BABYDOLLAR</span>
            </div>
            <div>
              EARN <span className="glow">DOLLAR</span>
            </div>
          </div>
          <div className="headline-desc">
            Enjoy the first token that gives you DOLLARS
          </div>
          <div className="headline-buttons">
            <a
              href="https://www.dextools.io/app/pancakeswap/pair-explorer/0xbee0902a23b2a2c81b444a734859da7c76ad261e"
              target="_blank"
              rel="noreferrer"
            >
              Live Chart
            </a>
            <a
              href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x4E833a1BDEEb75b3778Cf1637a0Af420786C3099"
              target="_blank"
              rel="noreferrer"
              className="secondary"
            >
              Buy
            </a>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
}

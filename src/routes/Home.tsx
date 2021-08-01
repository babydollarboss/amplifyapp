import React from "react";
import styled from "styled-components";

import { IRoute } from "./types";
import { LogoIcon } from "../components/SVGImages";
import CupCake from "../cupcake.png";

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
    width: 90%;
    height: auto;
  }
  .logo svg.glow {
    position: absolute;
    filter: blur(30px) brightness(100);
    transform: scale(0.9);
    opacity: 0.5;
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
    font-family: Roboto;
    color: var(--color-brand-primary);
    max-width: calc(100% - 30px);
  }
  .headline-buttons {
    display: flex;
    flex-direction: row;
    margin-bottom: 35px;
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
    position: relative;
    padding: 10px 30px;
  }
  .headline-buttons a:hover {
    color: black;
    background: white;
    transition: all 0.3s ease;
  }
  .headline-buttons a.secondary {
    border-color: var(--color-brand-primary);
    margin-left: 20px;
    background: linear-gradient(335deg, #d83fbe, rgb(48 24 245));
    border: none;
  }
  .headline-buttons a.secondary:hover {
    color: #fff;
    box-shadow: 0px 0px 14px 2px hsl(269deg 100% 83%);
    transition: all 0.3s ease;
    transform: scale(1.05);
  }
  .slippage {
    position: absolute;
    color: #fff;
    font-size: 12px;
    width: max-content;
    bottom: -30px;
    pointer-events: none;
  }
  .audit {
    font-family: "Audiowide";
    font-size: 18px;
    text-align: center;
    padding: 24px 44px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    margin-top: 34px;
    width: fit-content;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
    color: #fff;
    display: flex;
    flex-direction: row;
    align-content: center;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  .audit:hover {
    background: linear-gradient(
      335deg,
      rgb(216 63 190 / 10%),
      rgb(48 24 245 / 10%)
    );
    transform: scale(1.05);
    box-shadow: 0px 0px 14px 2px hsl(269deg 100% 53%);
  }
  .audit .audit-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 15px;
    text-shadow: 0 0 0px #a900ff, 0 0 0px #fff, 0 0 8px #ffe, 0 0 7px #9100ff,
      0 0 8px #a40cd6, 0 0 0px #f90, 0 0 0px #f90, 0 0 0px #f90;
  }
  .audit img {
    height: 54px;
    margin-right: -15px;
  }
  @media (max-width: 1000px) {
    .headline-text {
      font-size: 34px;
    }
  }
  @media (max-width: 800px) {
    .audit {
      margin: 0 auto;
    }
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
      padding: unset;
    }
    .audit {
      display: flex;
      align-content: center;
      padding: 0;
      height: 100px;
      width: 100%;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .audit-text {
      font-size: 14px;
    }
    .audit img {
      height: 34px;
    }
  }
  @media (max-width: 320px) {
    .logo {
      max-width: 80px;
    }
    .headline-text {
      font-size: 18px;
    }
    .headline-desc {
      font-size: 12px;
      margin: 15px 0;
    }
    .audit {
      height: 60px;
    }
  }
`;

export function Home({ visible }: IRoute) {
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
            The first token that rewards you with BUSD
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
              <span className="slippage">Slippage: 15 - 18%</span>
            </a>
          </div>
          <a href="https://dessertswap.finance/audits/Baby%20Dollar%20BEP-20%20Audit%209558725.pdf" target="_blank" rel="noreferrer" className="audit">
            <div className="audit-text">
              <span>DOXXED &amp; AUDITED BY</span>
              <span>Dessert Finance</span>
            </div>
            <img src={CupCake} alt="dessert-finance" />
          </a>
        </div>
      </div>
    </HomeContainer>
  );
}

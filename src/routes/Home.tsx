import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { IRoute } from "./types";
import { LogoIcon, MemberIcon, ChartIcon } from "../components/SVGImages";
import BUSD from "../tokenImages/busd.png";

const HomeContainer = styled.div`
  transition: all 0.3s ease;
  animation: fadeInTransition 0.5s ease forwards;
  opacity: 0;
  transform: scale(0);
  max-width: 100%;
  padding: 30px 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 81px - 46px);
  &.hidden {
    animation: fadeOutTransition 0.5s ease forwards;
  }
  .join-now,
  .chart {
    display: none;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .logo {
    width: 380px;
    max-width: 50%;
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
    text-align: left;
  }
  .headline-text {
    font-size: 44px;
    font-family: "Audiowide";
  }
  .headline-text .glow {
    --glow-color: #5d13ff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff,
      0 0 40px var(--glow-color), 0 0 80px var(--glow-color),
      0 0 90px var(--glow-color), 0 0 100px var(--glow-color),
      0 0 150px var(--glow-color);
  }
  .buttons {
    display: flex;
    flex-direction: column;
    gap: 42px;
  }
  .headline-desc {
    font-size: 32px;
    color: #fff;
    max-width: 100%;
    letter-spacing: 1px;
    margin: 24px 0 44px 0;
  }
  .headline-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 24px;
  }
  .headline-buttons a {
    background: none;
    border: none;
    border-style: solid;
    border-width: 1px;
    border-color: #fff;
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
    padding: 15px 24px;
    opacity: 0.8;
  }
  .headline-buttons a:hover {
    color: black;
    background: white;
    transition: all 0.3s ease;
    opacity: 1;
    transform: scale(1.03);
    box-shadow: 0px 0px 14px 2px hsl(269deg 100% 33%);
  }
  .headline-buttons a.secondary {
    background: linear-gradient(143deg, hsl(53deg 97% 71%), #f0b90b);
    color: black;
    border: none;
  }
  .headline-buttons a.secondary:hover {
    transition: all 0.3s ease;
  }
  .slippage {
    position: absolute;
    color: #fff;
    font-size: 12px;
    width: max-content;
    bottom: -30px;
    pointer-events: none;
  }
  .dividend-tracker {
    font-family: "Audiowide";
    font-size: 18px;
    border: unset;
    color: #fff;
    padding: 18px;
    border-radius: 10px;
    background: linear-gradient(
      335deg,
      rgb(216 63 190 / 90%),
      rgb(48 24 245 / 90%)
    );
    box-shadow: 0px 4px 6px 2px hsl(0deg 0% 0% / 10%);
    cursor: pointer;
    text-shadow: 0 0 0px #a900ff, 0 0 0px #fff, 0 0 8px #ffe, 0 0 7px #9100ff,
      0 0 8px #a40cd6, 0 0 0px #f90, 0 0 0px #f90, 0 0 0px #f90;
    transition: all 0.3s ease;
    position: relative;
  }
  .dividend-tracker .new {
    position: absolute;
    top: 20px;
    right: -10px;
    font-family: "Kanit";
    background: hsl(0deg 90% 50%);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 10px;
    letter-spacing: 2px;
    font-weight: bold;
    animation-name: bounce;
    transform-origin: center bottom;
    animation-duration: 800ms;
    animation-iteration-count: infinite;
  }
  .dividend-tracker:hover {
    opacity: 1;
    transform: scale(1.03);
    box-shadow: 0px 0px 14px 2px hsl(269deg 100% 53% / 70%);
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
  .headline-footer {
    font-size: 24px;
    display: flex;
    gap: 30px;
    justify-content: center;
    margin-top: 56px;
  }
  .headline-footer .footer-value {
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-right: -8px;
  }
  .footer-value span {
    font-size: 1em;
    --glow-color: hsl(259deg 60% 74% / 50%);
    letter-spacing: 1px;
    text-shadow: 0 0 5px hsl(0deg 0% 100% / 50%),
      0 0 10px rgb(255 255 255 / 50%), 0 0 2px hsl(0deg 0% 100% / 50%),
      0 0 4px var(--glow-color), 0 0 8px var(--glow-color),
      0 0 9px var(--glow-color), 0 0 10px var(--glow-color),
      0 0 15px var(--glow-color);
  }
  .headline-footer .footer-value img,
  .headline-footer .footer-value svg {
    width: 18px;
    height: 18px;
    fill: var(--color-brand-primary);
  }
  .headline-footer .footer-title {
    opacity: 0.75;
    font-size: 0.75em;
  }
  .headline-inner-box {
    display: flex;
    gap: 32px;
  }
  @media (max-width: 900px) {
    .headline-text {
      font-size: 34px;
    }
    .headline-desc {
      font-size: 24px;
    }
    .logo {
      width: unset;
      max-width: 200px;
    }
    .headline-footer {
      font-size: 18px;
    }
  }
  @media (max-width: 700px) {
    min-height: unset;
    .headline-inner-box {
      flex-direction: column;
      align-items: center;
    }
    .headline {
      text-align: center;
    }
    .content {
      gap: 32px;
    }
    .headline-footer {
      font-size: 16px;
    }
    .headline-footer .footer-value {
      font-size: 1.2rem;
    }
    .headline-buttons a {
      padding: 10px 16px;
    }
  }
  @media (max-width: 480px) {
    width: 100%;
    .content,
    .headline {
      width: 100%;
    }
    .headline-inner-box {
      width: 100%;
      padding: 24px;
      box-sizing: border-box;
    }
    .headline-footer {
      font-size: 12px;
      margin-top: unset;
    }
    .join-the-club,
    .live-chart {
      display: none;
    }
    .join-now,
    .chart {
      display: inline-block;
    }
    .logo {
      max-width: 100px;
    }
    .headline-text {
      font-size: 28px;
    }
    .headline-desc {
      font-size: 18px;
      margin: 16px 0 30px 0;
    }
    .slippage {
      font-size: 10px;
    }
    .headline-buttons a {
      flex: 1;
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
  @media (min-width: 1600px) {
    .headline-text {
      font-size: 38px;
    }
    .headline-desc {
      font-size: 28px;
    }
    .logo {
      max-width: 60%;
    }
  }
`;

export function Home({ visible }: IRoute) {
  const history = useHistory();

  const goToPath = (url) => history && history.push(url);

  return (
    <HomeContainer className={!visible ? "hidden" : ""}>
      <div className="content">
        <div className="headline-inner-box">
          <div className="logo">
            <LogoIcon className="glow" />
            <LogoIcon />
          </div>
          <div className="headline">
            <div className="headline-text">
              <div>Welcome to the</div>
              <div className="glow">Baby Dollar Club</div>
            </div>
            <div className="headline-desc">Earn. Play. Win Prizes.</div>
            {/* <div className="headline-buttons">
              <a
                href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x4E833a1BDEEb75b3778Cf1637a0Af420786C3099"
                target="_blank"
                rel="noreferrer"
                className="secondary"
              >
                JOIN THE CLUB
              </a>
            </div> */}
            <div className="buttons">
              <div className="headline-buttons">
                <a
                  href="https://www.dextools.io/app/pancakeswap/pair-explorer/0xbee0902a23b2a2c81b444a734859da7c76ad261e"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="chart">Chart</span>
                  <span className="live-chart">Live Chart</span>
                </a>
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0x4E833a1BDEEb75b3778Cf1637a0Af420786C3099"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary"
                >
                  <span className="join-the-club">Join the Club</span>
                  <span className="join-now">Buy</span>
                  <span className="slippage">Slippage: 15 - 18%</span>
                </a>
              </div>
              <button
                className="dividend-tracker"
                type="button"
                onClick={() => goToPath("/dashboard")}
              >
                Dividend Tracker
                <span className="new">NEW</span>
              </button>
            </div>

            {/* <a
            href="https://dessertswap.finance/audits/Baby%20Dollar%20BEP-20%20Audit%209558725.pdf"
            target="_blank"
            rel="noreferrer"
            className="audit"
          >
            <div className="audit-text">
              <span>DOXXED &amp; AUDITED BY</span>
              <span>Dessert Finance</span>
            </div>
            <img src={CupCake} alt="dessert-finance" />
          </a> */}
          </div>

          {/* <div className="headline-buttons">
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
          </div> */}
          {/* <a
            href="https://dessertswap.finance/audits/Baby%20Dollar%20BEP-20%20Audit%209558725.pdf"
            target="_blank"
            rel="noreferrer"
            className="audit"
          >
            <div className="audit-text">
              <span>DOXXED &amp; AUDITED BY</span>
              <span>Dessert Finance</span>
            </div>
            <img src={CupCake} alt="dessert-finance" />
          </a> */}
        </div>
        <div className="headline-footer">
          <div className="members">
            <div className="footer-value">
              <span>338</span>
              <MemberIcon />
            </div>
            <div className="footer-title">Total Club Members</div>
          </div>
          <div className="total-paid">
            <div className="footer-value">
              <span>$26467</span>
              <img src={BUSD} alt="busd" />
            </div>
            <div className="footer-title">Total Paid To Members</div>
          </div>
          <div className="marketcap">
            <div className="footer-value">
              <span>$33,361</span>
              <ChartIcon />
            </div>
            <div className="footer-title">Market Cap</div>
          </div>
        </div>
      </div>
    </HomeContainer>
  );
}

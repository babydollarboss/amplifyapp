import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Container } from "./Container";
import { TelegramIcon, TweeterIcon } from "./SVGImages";

const TopBarContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  height: 45px;
  width: 100%;
  position: relative;
  .title {
    opacity: 0.75;
    color: var(--color-brand-primary);
  }
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  .socials a {
    opacity: 0.5;
    transition: all 0.2s ease;
    margin-left: 12px;
  }
  .socials a:hover {
    opacity: 1;
    transform: scale(1.02);
  }
  @media (max-width: 480px) {
    .title {
      display: none;
    }
    .socials {
      margin: auto;
    }
  }
`;

export function TopBar() {
  return (
    <TopBarContainer>
      <Container>
        <div className="title">THE OFFICIAL CLUB OF BABYDOLLAR</div>
        <div className="socials">
          <a
            href="https://t.me/babydollarChat"
            target="_blank"
            rel="noreferrer"
          >
            <TelegramIcon />
          </a>
          <a
            href="https://twitter.com/BabyDollarBSC"
            target="_blank"
            rel="noreferrer"
          >
            <TweeterIcon />
          </a>
        </div>
      </Container>
    </TopBarContainer>
  );
}

const NavigationBarContainer = styled.div`
  position: relative;
  height: 80px;
  background-color: hsla(0, 0%, 100%, 0.01);
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.03);
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
  }
  .menu {
    height: 100%;
    display: flex;
  }
  @media (max-width: 480px) {
    height: 50px;
  }
`;

const NavigationBarButton = styled(
  ({ active, className, children, ...rest }) => (
    <button className={`${className}${active ? " active" : ""}`} {...rest}>
      <span>{children}</span>
      <span className="glow">{children}</span>
      <span className="line" />
    </button>
  )
)`
  background: unset;
  border: unset;
  min-width: 100px;
  color: #fff;
  font-family: Audiowide;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 2px;
  position: relative;
  padding: 0 8px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 0.7;
  .line {
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #fff;
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.3s ease;
  }
  .glow {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    opacity: 0;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 7px #fff, 0 0 20px #f90,
      0 0 17px #f90, 0 0 0px #f90, 0 0 0px #f90, 0 0 0px #f90;
  }
  &.active {
    .glow {
      animation: neon 1s ease-in-out infinite alternate;
    }
  }
  &:hover {
    opacity: 0.8;
    .glow {
      transition: opacity 0.3s ease;
      animation: unset;
      opacity: 0.3;
    }
  }
  &.active {
    opacity: 1;
    background: rgb(0 0 0 / 20%);
    .line {
      transform: scale(1);
      opacity: 1;
    }
  }
  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

export function NavigationBar({ location }) {
  const history = useHistory();
  const goToPath = (path) => history && history.push(path);

  return (
    <NavigationBarContainer>
      <Container>
        <div className="menu">
          <NavigationBarButton
            active={location.pathname === "/"}
            onClick={() => goToPath("/")}
          >
            HOME
          </NavigationBarButton>
          <NavigationBarButton
            active={location.pathname === "/features"}
            onClick={() => goToPath("/features")}
          >
            FEATURES
          </NavigationBarButton>
          <NavigationBarButton
            active={location.pathname === "/roadmap"}
            onClick={() => goToPath("/roadmap")}
          >
            ROADMAP
          </NavigationBarButton>
          {/* <NavigationBarButton
            active={location.pathname === "/whitepaper"}
            onClick={() => goToPath("/whitepaper")}
          >
            WHITEPAPER
          </NavigationBarButton> */}
        </div>
      </Container>
    </NavigationBarContainer>
  );
}

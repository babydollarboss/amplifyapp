import React, { useState } from "react";
import Particles from "react-tsparticles";
import styled from "styled-components";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

import { TopBar, NavigationBar, Sidebar } from "./components/NavigationBar";
import { Main } from "./components/Main";
import { Routes } from "./routes/routes";
import { IConnectWalletPopupState } from "./redux/connectWalletPopup/types";
import { DelayedComponents } from './components/DelayedComponents'
import { WalletsModal } from './components/WalletsModal'

const StyledParticles = styled(Particles)`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.8;
  pointer-events: none;
  canvas {
    pointer-events: none !important;
  }
`;

function App() {
  const [sidebarActive, setSidebarActive] = useState(false);

  const { visible } = useSelector(
    ({
      connectWalletPopup,
    }: {
      connectWalletPopup: IConnectWalletPopupState;
    }) => connectWalletPopup
  );

  console.log("visible", visible);

  return (
    <Router>
      <Sidebar active={sidebarActive} setSidebarActive={setSidebarActive} />
      <DelayedComponents
        delayMount={400}
        delayUnmount={300}
        isMounted={visible}
      >
        <WalletsModal visible={visible} />
      </DelayedComponents>
      <Main>
        <StyledParticles
          id="tsparticles"
          options={{
            particles: {
              number: {
                value: 15,
                density: {
                  enable: false,
                },
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 2.5,
                  opacity_min: 0.1,
                },
              },
              size: {
                value: 5,
                random: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 0.5,
                straight: false,
              },
            },
          }}
        />
        <TopBar />
        <Switch>
          <NavigationBar
            sidebarActive={sidebarActive}
            setSidebarActive={setSidebarActive}
          />
        </Switch>
        <Switch>
          <Routes />
        </Switch>
      </Main>
    </Router>
    // <div className="page-container">
    //   <div className="content-wrapper">
    //     <img src={logo} className="logo" alt="logo" />
    //     <div className="head-line__text">
    //       <span>BABY DOLLAR</span>
    //     </div>
    //     <div className="head-line__coming-soon">$BABYDOLLAR</div>
    //   </div>
    //   <div className="social-links">
    //     <a href="https://t.me/babydollarChat" target="_blank" rel="noreferrer">
    //       <img src={telegram} className="social-icon" alt="logo" />
    //     </a>
    //     <a
    //       href="https://twitter.com/BabyDollarBSC"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <TweetIcon />
    //     </a>
    //   </div>
    // </div>
  );
}

export default App;

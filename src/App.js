import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

import { TopBar, NavigationBar } from "./components/NavigationBar";
import { Main } from "./components/Main";
import { Routes } from "./routes/routes";

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
    pointer-events: none;
  }
`;

function App() {
  return (
    <Router>
      <Main>
        <StyledParticles
          params={{
            background: {
              color: {
                value: "#000",
              },
            },
            particles: {
              number: {
                value: 120,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 2,
                random: true,
              },
              move: {
                direction: "middle",
                outMode: "out",
              },
              links: {
                enable: false,
              },
            },
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "remove",
                },
              },
              modes: {
                remove: {
                  quantity: 10,
                },
              },
            },
          }}
        />
        <TopBar />
        <Switch>
          <NavigationBar />
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

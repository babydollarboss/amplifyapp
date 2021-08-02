import React from "react";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";

import { Container } from "../components/Container";
import { ConnectButton } from "../components/ConnectButton";

const DashboardContainer = styled.div`
  transition: all 0.3s ease;
  animation: fadeInOpacity 0.5s ease forwards;
  transform-origin: center top;
  max-width: 100%;
  width: 100%;
  flex: 1;
  background: linear-gradient(
    181deg,
    hsl(255deg 100% 6% / 90%),
    hsl(233deg 98% 5% / 90%)
  );
  position: relative;
  &.hidden {
    animation: fadeOutOpacity 0.5s ease forwards;
  }
  .connect-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: hsl(0deg 0% 0% / 40%);
    z-index: 1;
    transition: all 0.3s ease;
  }
`;

const DashboardInnerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100% - 40px);
  position: relative;
  padding: 24px;
  box-sizing: border-box;
  .dashboard-title {
    font-family: "Audiowide";
    font-size: 28px;
    text-shadow: 0 0 5px #fff, 0 0 2px #fff, 0 0 1px #fff, 0 0 1px #f90,
      0 0 4px #f8c, 0 0 0px #f90, 0 0 0px #f90, 0 0 0px #f90;
    letter-spacing: 2px;
    line-height: 1.1;
    margin-bottom: 16px;
  }
  &.blurred {
    filter: blur(10px);
  }
`;

export function Dashboard({ visible }) {
  const { active } = useWeb3React();

  return (
    <DashboardContainer className={!visible ? "hidden" : ""}>
      {!active && (
        <div className="connect-mask">
          <ConnectButton />
        </div>
      )}
      <DashboardInnerContainer className={!active ? "blurred" : ""}>
        <div className="dashboard-title">Baby Token Infos & Analytics</div>
      </DashboardInnerContainer>
    </DashboardContainer>
  );
}

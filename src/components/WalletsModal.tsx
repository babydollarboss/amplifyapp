import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { WalletConnectIcon, TrustWalletIcon, MetamaskIcon } from "./SVGImages";
import { hideConnectWalletPopup } from "../redux/connectWalletPopup/actions";
import useAuth from "../hooks/useAuth";
import { ConnectorNames } from "../utils/web3react";

const WalletsModalContainer = styled.div`
  transition: all 0.3s ease;
  animation: fadeInOpacity 0.3s ease forwards;
  transform-origin: center top;
  max-width: 100%;
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  opacity: 0;
  pointer-events: auto;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  z-index: 999;
  background: hsl(0deg 0% 0% / 70%);
  &.hidden {
    pointer-events: none;
    animation: fadeOutOpacity 0.3s ease forwards;
  }
  .bg-mask {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
  button {
    z-index: 1;
    width: 170px;
    height: 100px;
    display: flex:
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgb(40, 13, 95);
    font-weight: 400;
    line-height: 1.5;
    font-size: 14px;
    color: #fff;
    background: hsl(0deg 0% 9%);
    border-radius: 15px;
    font-family: 'Kanit';
    font-size: 18px;
    cursor: pointer;
    border: none;
  }
  button svg {
    align-self: center;
    fill: rgb(40, 13, 95);
    flex-shrink: 0;
    margin-bottom: 8px;
  }
`;

interface IWalletsModal {
  visible: boolean;
}

export function WalletsModal({ visible }: IWalletsModal) {
  const dispatch = useDispatch();
  const { login } = useAuth();

  function connectWallet(connectorNames: ConnectorNames) {
    login(connectorNames);
    closePopup();
  }

  function onClickParent(e) {
    if (e.target.classList.contains("modal-container")) {
      closePopup();
    }
  }

  function closePopup() {
    dispatch(hideConnectWalletPopup());
  }

  return (
    <WalletsModalContainer
      role="button"
      onClick={onClickParent}
      className={`modal-container ${!visible ? "hidden" : ""}`}
    >
      <button
        type="button"
        onClick={() => connectWallet(ConnectorNames.Injected)}
      >
        <MetamaskIcon />
        <div className="btn-text">Metamask</div>
      </button>
      <button
        type="button"
        onClick={() => connectWallet(ConnectorNames.Injected)}
      >
        <TrustWalletIcon />
        <div className="btn-text">Trust Wallet</div>
      </button>
      <button
        type="button"
        onClick={() => connectWallet(ConnectorNames.WalletConnect)}
      >
        <WalletConnectIcon />
        <div className="btn-text">Wallet Connect</div>
      </button>
    </WalletsModalContainer>
  );
}

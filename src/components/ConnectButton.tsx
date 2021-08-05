import React from "react";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";

import { ConnectorNames } from "../utils/web3react";
import useAuth from "../hooks/useAuth";

const WalletButton = styled(({ connected, account, className, ...rest }) => (
  <>
    <button
      type="button"
      className={`${className}${connected ? " connected" : ""}`}
      {...rest}
    >
      {connected ? "Reset" : "Connect"}
    </button>
    {account && <div>Connected as {account}</div>}
  </>
))`
border: unset;
color: black;
text-transform: uppercase;
font-family: 'Audiowide';
padding: 15px 20px;
background: var(--color-brand-primary);
border-radius: 10px;
font-size: 20px;
cursor: pointer;
font-weight: bold;
letter-spacing: 1px;
transition: all 0.3s ease;
&:hover {
  transform: scale(1.05);
}
`;

export function ConnectButton() {
  const { login, logout } = useAuth();
  const { account, active } = useWeb3React();

  function connectWallet() {
    login(ConnectorNames.Injected);
  }

  function disconnectWallet() {
    logout();
  }

  return (
    <WalletButton
      connected={active}
      onClick={!active ? connectWallet : disconnectWallet}
      account={account}
    />
  );
}

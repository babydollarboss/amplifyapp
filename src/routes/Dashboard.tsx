import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";

import { Container } from "../components/Container";
import { ConnectButton } from "../components/ConnectButton";
import useTokenBalance, {
  useTokenDividends,
  IAccountDividendsInfo,
} from "../hooks/useTokenBalance";
import {
  getBabyCakeAddress,
  getBabyDollarAddress,
} from "../utils/addressHelpers";
import { getFullDisplayBalance } from "../utils/formatBalance";
import { DividendTokens, IDividendToken } from "../config/constants/tokens";

const DashboardContainer = styled.div`
  transition: all 0.3s ease;
  animation: fadeInOpacity 0.5s ease forwards;
  transform-origin: center top;
  max-width: 100%;
  width: 100%;
  flex: 1;
  background: hsl(0deg 0% 0% / 50%);
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
  .title {
    font-family: "Audiowide";
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }
  .content {
    box-sizing: border-box;
    padding: 15px;
    border-radius: 10px;
    background: hsl(0deg 0% 0% / 45%);
    flex: 1;
  }
  &.blurred {
    filter: blur(10px);
  }
  @media (max-width: 480px) {
    padding: 28px 12px;
    .content {
      background: none;
      padding: 0;
    }
  }
`;

const TokenHoldingContainer = styled.div`
  margin: 12px 0 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .name {
    font-size: 16px;
    display: flex;
    align-items: center;
  }
  .name__text {
    opacity: 0.9;
  }
  img {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    margin-right: 15px;
  }
  .balance {
    display: flex;
    align-items: center;
  }
  .balance__amount {
    background: hsl(0deg 0% 100% / 10%);
    border-radius: 5px;
    padding: 4px 12px;
    margin-right: 12px;
    color: var(--color-brand-primary);
    max-width: 130px;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 100px;
    text-align: right;
  }
  @media (max-width: 480px) {
    .name__text {
      font-size: 12px;
    }
    img {
      margin-right: 8px;
      width: 20px;
      height: 20px;
    }
  }
`;

const DashboardBlock = styled.div`
  background: rgb(255 255 255 / 7%);
  border-radius: 15px;
  box-sizing: border-box;
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px ) {
    padding: 12px;
  }
`;

const DashboardBlocks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;

interface ITotalBalance {
  [symbol: string]: number;
}

interface Earnings {
  earnings: number;
  pendingEarnings: number;
  nextDividendTiming: number;
}

interface ISetEarnings extends Earnings {
  symbol: string;
}

interface ITotalEarnings {
  [symbol: string]: Earnings;
}

interface IDividendTokenHolding extends IDividendToken {
  onSetBalance: ({
    symbol,
    amount,
  }: {
    symbol: string;
    amount: number;
  }) => void;
}

function DividendTokenHolding({
  onSetBalance,
  symbol,
  address,
  projectLink,
  image,
}: IDividendTokenHolding) {
  const { balance } = useTokenBalance(address[56]);
  const prettyBalance = Math.round(Number(getFullDisplayBalance(balance)));

  useEffect(() => {
    onSetBalance({ symbol, amount: prettyBalance });
  }, [symbol, prettyBalance, onSetBalance]);

  return (
    <TokenHoldingContainer>
      <div className="name">
        <img src={image} alt={symbol} />
        <span className="name__text">{`${symbol}:`}</span>
      </div>
      <div className="balance">
        <span className="balance__amount">{prettyBalance}</span>
      </div>
    </TokenHoldingContainer>
  );
}

const DividendTokenEarningsContainer = styled.div`
  .token {
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .name__text {
    font-size: 14px;
    opacity: 0.9;
    margin-left: 8px;
    max-width: 90px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
  }
  .balance__amount {
    text-align: right;
  }
  img {
    width: 24px;
    height: 24px;
    border-radius: 100%;
  }
  .reward-image {
    width: 18px;
    height: 18px;
    margin-right: -4px;
    margin-left: 6px;
  }
  .earnings {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  @media (max-width: 480px) {
    .name__text {
      font-size: 10px;
    }
    .balance__amount {
      font-size: 12px;
    }
    img {
      width: 20px;
      height: 20px;
    }
  }
`;

interface IDividendTokenEarnings extends IDividendToken {
  onSetEarnings: (earningProps: ISetEarnings) => void;
}

function DividendTokenEarnings({
  onSetEarnings,
  symbol,
  address,
  projectLink,
  image,
  rewardImage,
}: IDividendTokenEarnings) {
  const { dividendsInfo } = useTokenDividends(symbol);
  console.log("tokenDividendInfo", dividendsInfo);
  const pendingEarnings = dividendsInfo
    ? getFullDisplayBalance(dividendsInfo.pendingEarnings, 18, 2)
    : "-";

  return (
    <DividendTokenEarningsContainer>
      <div className="token">
        <img src={image} alt={symbol} />
        <span className="name__text">{`${symbol}`}</span>
      </div>
      <div className="next-dividends">
        <span className="balance__amount">{pendingEarnings}</span>
      </div>
      <div className="earnings">
        <span className="balance__amount">
          {dividendsInfo
            ? getFullDisplayBalance(dividendsInfo.earnings, 18, 2)
            : "-"}
        </span>
        <img
          className="reward-image"
          src={rewardImage}
          alt={`${symbol}-reward`}
        />
      </div>
    </DividendTokenEarningsContainer>
  );
}

const EarningsTable = styled.div`
  display: grid;
  grid-auto-rows: auto;
  border-radius: 24px;
  > div {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    padding: 12px;
    box-sizing: border-box;
    border-bottom: 1px solid hsl(0deg 0% 100% / 5%);
  }
  > div.header {
    border-radius: 15px;
    background: hsl(0deg 0% 0% / 45%);
    color: hsl(0deg 0% 100% / 70%);
  }
  > * > *:first-child {
    text-align: left;
  }
  > * > *:nth-child(2) {
    text-align: center;
  }
  > * > *:nth-child(3) {
    text-align: right;
  }
`;

export function Dashboard({ visible }) {
  const { active } = useWeb3React();
  const [totalBalance, setTotalBalance] = useState<ITotalBalance>({});
  const [totalEarnings, setTotalEarnings] = useState<ITotalEarnings>({});

  function onSetBalance({
    symbol,
    amount,
  }: {
    symbol: string;
    amount: number;
  }) {
    if (totalBalance[symbol] !== amount) {
      setTotalBalance({
        ...totalBalance,
        [symbol]: amount,
      });
    }
  }

  function onSetEarnings({
    symbol,
    earnings,
    pendingEarnings,
    nextDividendTiming,
  }: ISetEarnings) {
    if (
      totalEarnings[symbol].earnings !== earnings ||
      totalEarnings[symbol].pendingEarnings !== pendingEarnings
    ) {
      setTotalEarnings({
        ...totalEarnings,
        [symbol]: {
          earnings,
          pendingEarnings,
          nextDividendTiming,
        },
      });
    }
  }

  return (
    <DashboardContainer className={!visible ? "hidden" : ""}>
      {!active && (
        <div className="connect-mask">
          <ConnectButton />
        </div>
      )}
      <DashboardInnerContainer className={!active ? "blurred" : ""}>
        <div className="dashboard-title">Dividends Tracker</div>
        <DashboardBlocks>
          <DashboardBlock>
            <div className="title">Dividend Token Holdings</div>
            <div className="content">
              {DividendTokens.map(({ symbol, ...rest }) => (
                <DividendTokenHolding
                  onSetBalance={onSetBalance}
                  key={symbol}
                  symbol={symbol}
                  {...rest}
                />
              ))}
            </div>
          </DashboardBlock>
          <DashboardBlock>
            <div className="title">Dividend Earnings</div>
            <EarningsTable>
              <div className="header">
                <span>Token</span>
                <span>Next Dividend</span>
                <span>Total Earnings</span>
              </div>
              {DividendTokens.map(({ symbol, ...rest }) => (
                <DividendTokenEarnings
                  onSetEarnings={onSetEarnings}
                  key={symbol}
                  symbol={symbol}
                  {...rest}
                />
              ))}
            </EarningsTable>
          </DashboardBlock>
        </DashboardBlocks>
      </DashboardInnerContainer>
    </DashboardContainer>
  );
}

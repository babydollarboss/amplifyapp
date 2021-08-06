import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useWeb3React } from "@web3-react/core";

import { Container } from "../components/Container";
import { ConnectButton } from "../components/ConnectButton";
import useTokenBalance, { useTokenDividends } from "../hooks/useTokenBalance";
import { getFullDisplayBalance } from "../utils/formatBalance";
import { DividendTokens, IDividendToken } from "../config/constants/tokens";
import useClaimRewards from "../hooks/useClaimRewards";

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const minimumTokensRequired = 100000000;

const DashboardContainer = styled.div`
  transition: all 0.3s ease;
  animation: fadeInOpacity 0.5s ease forwards;
  transform-origin: center top;
  max-width: 100%;
  width: 100%;
  flex: 1;
  background: hsl(0deg 0% 0% / 50%);
  position: relative;
  padding: 24px;
  box-sizing: border-box;
  &.hidden {
    animation: fadeOutOpacity 0.5s ease forwards;
  }
  .connect-mask {
    position: fixed;
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
  @media (max-width: 480px) {
    padding: 24px 12px;
  }
`;

const DashboardInnerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
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
    padding: 28px 0;
    .content {
      background: none;
      padding: 0;
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
  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const DashboardBlocks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

const DividendTokenEarningsContainer = styled.div`
  user-select: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  &:hover {
    background: hsl(0deg 0% 0% / 10%);
  }
  &.active {
    background: hsl(0deg 0% 0% / 30%);
  }
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
    overflow: hidden;
  }
  .reward-image {
    width: 18px;
    height: 18px;
    margin-right: -4px;
    margin-left: 6px;
    overflow: hidden;
  }
  .earnings {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .detailed-info {
    grid-column: 1 / span 3;
    display: flex;
    justify-content: space-between;
    padding: 12px 8px 0 8px;
    font-size: 14px;
    align-items: center;
  }
  .detailed-info.txid {
    justify-content: center;
  }
  button,
  .button {
    border: unset;
    color: #fff;
    border-radius: 10px;
    background: hsl(256deg 100% 60%);
    padding: 8px 18px;
    font-family: "Kanit";
    font-weight: bold;
    cursor: pointer;
    box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
    letter-spacing: 1px;
    text-decoration: none;
    display: inline-block;
  }
  button:hover,
  .button:hover {
    opacity: 0.65;
  }
  button:active,
  .button:hover {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }
  .payout-info .label {
    margin-right: 12px;
  }
  .detailed-info.txid .payout-info {
    font-size: 12px;
    opacity: 0.65;
  }
  .detailed-info .payout-info a {
    color: var(--color-brand-primary);
    opacity: 0.7;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
    vertical-align: middle;
  }
  .detailed-info .payout-info a:hover {
    opacity: 1;
  }
  .minimum-requirement {
    position: absolute;
    width: 100%;
    z-index: 1;
    text-align: center;
    background: hsl(0deg 0% 0% / 70%);
    height: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: hsl(0deg 80% 60%);
  }
  .minimum-requirement .amount {
    color: var(--color-brand-primary);
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
    position: relative;
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

const HoldingsTable = styled(EarningsTable)`
  > div {
    grid-template-columns: repeat(2, 1fr);
  }
  > * > *:first-child {
    text-align: left;
  }
  > * > *:nth-child(2) {
    text-align: right;
  }
`;

const TokenBalanceContainer = styled(DividendTokenEarningsContainer)`
  .detailed-info .payout-info a {
    max-width: 200px;
  }
  .buy .button {
    background: hsl(46deg 100% 40%);
  }
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
  active;
  onClick;
}

function DividendTokenHolding({
  onSetBalance,
  symbol,
  address,
  projectLink,
  buyLink,
  image,
  active,
  onClick,
}: IDividendTokenHolding) {
  const { balance } = useTokenBalance(address[56]);
  const prettyBalance = Math.round(Number(getFullDisplayBalance(balance)));

  useEffect(() => {
    onSetBalance({ symbol, amount: prettyBalance });
  }, [symbol, prettyBalance, onSetBalance]);

  return (
    <TokenBalanceContainer className={active ? "active" : ""} onClick={onClick}>
      <div className="token">
        <img src={image} alt={symbol} />
        <span className="name__text">{`${symbol}`}</span>
      </div>
      <div className="earnings">
        <span className="balance__amount">
          {numberWithCommas(prettyBalance)}
        </span>
      </div>
      {active && (
        <div className="detailed-info">
          <div className="payout-info">
            <span className="label">Website:</span>
            <a href={projectLink} target="_blank" rel="noreferrer">
              {projectLink}
            </a>
          </div>
          <div className="buy">
            <a href={buyLink} className='button' target="_blank" rel="noreferrer">
              Buy
            </a>
          </div>
        </div>
      )}
    </TokenBalanceContainer>
  );
}

interface IDividendTokenEarnings extends IDividendToken {
  minimumRequirementMet: boolean;
  onSetEarnings: (earningProps: ISetEarnings) => void;
  active?: boolean;
  onClick: () => void;
}

function DividendTokenEarnings({
  onSetEarnings,
  symbol,
  // address,
  // projectLink,
  minimumRequirementMet,
  image,
  rewardImage,
  active,
  onClick,
}: IDividendTokenEarnings) {
  const [claiming, setClaiming] = useState(false);
  const [txid, setTxid] = useState("");
  const { dividendsInfo } = useTokenDividends(symbol);
  const { onClaim } = useClaimRewards(symbol);

  const pendingEarnings = dividendsInfo
    ? numberWithCommas(
        Number(getFullDisplayBalance(dividendsInfo.pendingEarnings, 18, 2))
      )
    : "-";

  const balanceAmount = dividendsInfo
    ? numberWithCommas(
        Number(getFullDisplayBalance(dividendsInfo.earnings, 18, 2))
      )
    : "-";

  const nextDividendIn = dividendsInfo
    ? `${numberWithCommas(
        Math.round(
          Number(getFullDisplayBalance(dividendsInfo.earnings, 18, 0)) / 60
        )
      )}mins`
    : "-";

  const handleClaim = async () => {
    setClaiming(true);

    try {
      const res = await onClaim();
      if (res) {
        setTxid(res.transactionHash);
      }
      setClaiming(false);
    } catch (e) {
      console.error(e);
      setClaiming(false);
    }
  };

  useEffect(() => {
    onSetEarnings({
      symbol,
      earnings: Number(balanceAmount),
      pendingEarnings: Number(pendingEarnings),
      nextDividendTiming: Number(nextDividendIn),
    });
  }, [symbol, pendingEarnings, balanceAmount, nextDividendIn, onSetEarnings]);

  if (!minimumRequirementMet && symbol !== "BABYDOLLAR") {
    return (
      <DividendTokenEarningsContainer>
        <div className="token">
          <img src={image} alt={symbol} />
          <span className="name__text">{`${symbol}`}</span>
        </div>
        <div className="next-dividends">
          <span className="balance__amount">-</span>
        </div>
        <div className="earnings">
          <span className="balance__amount">-</span>
          <img
            className="reward-image"
            src={rewardImage}
            alt={`${symbol}-reward`}
          />
        </div>
        <div className="minimum-requirement">
          <span>Minimum BABYDOLLAR required:</span>
          <span className="amount">
            {numberWithCommas(minimumTokensRequired)}
          </span>
        </div>
      </DividendTokenEarningsContainer>
    );
  }

  return (
    <DividendTokenEarningsContainer
      className={active ? "active" : ""}
      onClick={onClick}
    >
      <div className="token">
        <img src={image} alt={symbol} />
        <span className="name__text">{`${symbol}`}</span>
      </div>
      <div className="next-dividends">
        <span className="balance__amount">{pendingEarnings}</span>
      </div>
      <div className="earnings">
        <span className="balance__amount">{balanceAmount}</span>
        <img
          className="reward-image"
          src={rewardImage}
          alt={`${symbol}-reward`}
        />
      </div>
      {active && (
        <div className="detailed-info">
          <div className="payout-info">
            <span className="label">Next dividend in:</span>
            {nextDividendIn}
          </div>
          <div className="claim">
            <button type="button" onClick={handleClaim} disabled={claiming}>
              {!claiming ? "Claim" : "Claiming..."}
            </button>
          </div>
        </div>
      )}
      {txid && (
        <div className="detailed-info txid">
          <div className="payout-info">
            <span className="label">Transaction ID:</span>
            <a
              href={`https://bscscan.com/tx/${txid}`}
              target="_blank"
              rel="noreferrer"
            >
              {txid}
            </a>
          </div>
        </div>
      )}
    </DividendTokenEarningsContainer>
  );
}

interface ITotalEarningsSection {
  minimumRequirementMet: boolean;
  dividendTokenHoldings: typeof DividendTokens;
  onSetEarnings: (earningProps: ISetEarnings) => void;
}

function TotalEarningsSection({
  onSetEarnings,
  dividendTokenHoldings,
  minimumRequirementMet,
}: ITotalEarningsSection) {
  const [selectedRow, selectRow] = useState("BABYDOLLAR");

  return (
    <DashboardBlock>
      <div className="title">Total Earnings</div>
      <EarningsTable>
        <div className="header">
          <span>Token</span>
          <span>Next Dividend</span>
          <span>Total Earnings</span>
        </div>
        {dividendTokenHoldings.map(({ symbol, ...rest }) => (
          <DividendTokenEarnings
            minimumRequirementMet={minimumRequirementMet}
            onClick={() => selectRow(symbol)}
            active={symbol === selectedRow}
            onSetEarnings={onSetEarnings}
            key={symbol}
            symbol={symbol}
            {...rest}
          />
        ))}
      </EarningsTable>
    </DashboardBlock>
  );
}

interface ITotalBalanceSection {
  dividendTokenHoldings: typeof DividendTokens;
  onSetBalance: ({
    symbol,
    amount,
  }: {
    symbol: string;
    amount: number;
  }) => void;
}

function TotalBalanceSection({
  onSetBalance,
  dividendTokenHoldings,
}: ITotalBalanceSection) {
  const [selectedRow, selectRow] = useState("BABYDOLLAR");

  return (
    <DashboardBlock>
      <div className="title">Token Balance</div>
      <HoldingsTable>
        <div className="header">
          <span>Token</span>
          <span>Balance</span>
        </div>
        {dividendTokenHoldings.map(({ symbol, ...rest }) => (
          <DividendTokenHolding
            onClick={() => selectRow(symbol)}
            onSetBalance={onSetBalance}
            active={symbol === selectedRow}
            key={symbol}
            symbol={symbol}
            {...rest}
          />
        ))}
      </HoldingsTable>
    </DashboardBlock>
  );
}

export function Dashboard({ visible }) {
  const { active } = useWeb3React();
  const [totalBalance, setTotalBalance] = useState<ITotalBalance>({});
  const [totalEarnings, setTotalEarnings] = useState<ITotalEarnings>({});

  const totalBabyDollar = totalBalance.BABYDOLLAR || 0;
  const minimumRequirementMet = totalBabyDollar > minimumTokensRequired;

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
      totalEarnings[symbol] &&
      (totalEarnings[symbol].earnings !== earnings ||
        totalEarnings[symbol].pendingEarnings !== pendingEarnings)
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

  function getDividendTokenHoldings() {
    return DividendTokens;
  }

  return (
    <DashboardContainer className={!visible ? "hidden" : ""}>
      {!active && (
        <div className="connect-mask">
          <ConnectButton />
        </div>
      )}
      <h2>Dividends Tracker</h2>
      <DashboardInnerContainer className={!active ? "blurred" : ""}>
        <DashboardBlocks>
          <TotalEarningsSection
            minimumRequirementMet={minimumRequirementMet}
            onSetEarnings={onSetEarnings}
            dividendTokenHoldings={getDividendTokenHoldings()}
          />
          <TotalBalanceSection
            onSetBalance={onSetBalance}
            dividendTokenHoldings={getDividendTokenHoldings()}
          />
        </DashboardBlocks>
      </DashboardInnerContainer>
    </DashboardContainer>
  );
}

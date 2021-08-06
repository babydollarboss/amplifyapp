import React from "react";
import styled from "styled-components";

import { Container } from "../components/Container";

const WhitepaperContainer = styled.div`
  transition: all 0.3s ease;
  animation: fadeInTransition 0.5s ease forwards;
  transform-origin: center top;
  max-width: 100%;
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  &.hidden {
    animation: fadeOutTransition 0.5s ease forwards;
  }
`;

const InnerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: 100%;
  h3 {
    margin-top: 50px;
  }
`;

export function Whitepaper({ visible }) {
  return (
    <WhitepaperContainer className={!visible ? "hidden" : ""}>
      <h2>Whitepaper</h2>
      <InnerContainer>
        {/* <p>
          BABY DOLLAR ($BABYDOLLAR) Whitepaper is written to let viewers
          understand our goals, strategy and roadmap. The information written
          below will allow viewers to understand how our redistribution
          mechanism work, what are our plans for the future and how we plan to
          make our ecosystem a safe, fun and exciting place to be.
        </p> */}
        <h3>What is Baby Dollar?</h3>
        <p>
          Baby Dollar is a reflection token that rewards holders with BUSD and
          grant holders access to Baby Dollar Club games, contests and
          decentralized apps.
        </p>
        <h3>Transaction Tax Breakdowns</h3>
        <div>-7% goes to BUSD rewards</div>
        <div>- 3% goes to LP</div>
        <div>- 5% goes to marketing</div>
        <h3>Why choose BUSD instead of other stablecoins?</h3>
        <p>
          We&apos;ve cycled through many stablecoins and find that BUSD is the
          safest and rewarding. Unlike most stablecoins, BUSD is regulated and
          audited. This ensures that every BUSD is backed 1:1 by a physical
          dollar stored in FDIC-insured US banks. Furthermore, redeeming BUSD
          doesn&apos;t incur any fees and can be staked to earn additional
          interests, making it the perfect stablecoin.
        </p>
        <h3>Why create the token?</h3>
        <p>
          The team of Baby Dollar have been in the DeFi space but only as
          investors. We are also tech enthusiasts who&apos;ve been working
          professionally as developers and are avid gamers. We thought, why not
          use our skills and passion, to make the crypto space an exciting, fun
          and safe environment for investors. And that&apos;s how the idea was
          born.
        </p>
        <h3>BABY DOLLAR redistribution</h3>
        <p>
          We created a unique system that auto-claims for every single holder
          the amount due. The way it works for holders: You buy tokens and hold
          them, every 60 minutes you’ll automatically receive BUSD in your
          wallet. Not a single action is required.
        </p>
        <p>Your BABY DOLLAR tokens amount is persistent and won’t change.</p>
        <p>
          Note: In periods of low volume BUSD may not be sent out every hour,
          but don’t worry. It accumulates and is then sent when ready. You’ll
          never miss out.
        </p>
        <h3>Behind the scenes:</h3>
        <p>-The contract keeps track in an array of all token holders</p>
        <p>-The contract keeps an index into the array for processing</p>
        <p>
          -Every transaction processes a certain number of users, depending on
          the transaction size (bigger token transfers can process more, since
          the gas will still be proportionally less than the value of the
          tokens)
        </p>
        <p>
          -The token is based on a Dividend-Paying Token Standard, which means
          all BUSD the contract gains will be split equally proportionally to
          the token holders.
        </p>
        <p>
          -When a user is processed, the contract checks how many withdrawable
          dividends they have, and if it is above the minimum threshold for
          auto-claims, will either automatically claim those dividends for BUSD,
          or automatically buy back tokens for them.
        </p>
        <p>
          This system is fully automated and doesn’t add minimal gas fees
          proportional to value transferred. The number of holders processed
          through each transaction is dynamic and based on transaction size.
          Holders will receive dividends from the queue based on their position
          in the array. It’s a fair system, fully automated. Minimum token
          balance is 200,000 BABY DOLLAR tokens to receive BUSD distributions.
        </p>
        <h3>Token Information</h3>
        <p>Network: Binance Smart Chain (BEP-20)</p> <p>Ticker: BABY DOLLAR</p>
        <p>Contract address: 0x4e833a1bdeeb75b3778cf1637a0af420786c3099</p>
        <p>Decimals: 18</p>
        <p>Total Supply: 100,000,000,000</p>
        <p>Team Allocations: 5,000,000,000 (5%)</p>
        <p>Tokens for Pancakeswap Listing: 95,000,000,000 (95%)</p>
        <p>
          Fair Launch Time: July 24th 2021 Liquidity Locked: 100% - Unlock Date:
          12 months
        </p>
        <h3>Secured by design</h3>
        <p>
          Locked Liquidity Initial liquidity will be locked for 12 months to
          provide holders with peace of mind that the token can always be
          exchanged. A trusted 3rd party, DXLock, will operate as the middle man
          to ensure that all raised liquidity is locked in a secure locker for
          the full timeframe.
        </p>
        <h3>Contract Audit</h3>
        <p>
          Due to the fact that BABYDOLLAR is a mirror fork of BABYCAKE, the
          smart contract is as safe as BABYCAKE. Additionally, BABYCAKE&apos;s
          smart contract was audited by a top-tier audit with HASHEX. Therefore,
          there&apos;s no vulnerabilities that can be found such as:
        </p>
        -Integer Overflow -Integer Underflow -Callstack Depth Attack
        <br />
        -Timestamp Dependency
        <br />
        -Parity Multisig Bug
        <br />
        -Transaction-Ordering
        <br />
        Dependency Both the token and dividend contract are verified and
        available for viewing on bscscan.
      </InnerContainer>
    </WhitepaperContainer>
  );
}

import React from "react";
import styled from "styled-components";

import { Container } from "../components/Container";

const FeaturesContainer = styled.div`
  transition: all 0.3s ease;
  animation: fadeInTransition 0.5s ease forwards;
  transform-origin: center top;
  max-width: 100%;
  padding: 15px;
  &.hidden {
    animation: fadeOutTransition 0.5s ease forwards;
  }
`;

const FeatureBlocksContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .feature-block {
    width: 300px;
    height: 300px;
    display: flex;
    position: relative;
    margin: 20px;
    text-align: left;
  }
  .feature-inner-block {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: inherit;
    border-style: solid;
    border-width: 1px;
    border-color: #fff;
    background: hsl(238deg 100% 20% / 6%);
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    font-size: 15px;
    text-align: center;
    justify-content: space-evenly;
  }
  .feature-inner-block > .title {
    font-family: "Audiowide";
    font-size: 15px;
    letter-spacing: 1px;
  }
  .feature-inner-block > .desc {
    opacity: 0.7;
    font-size: 14px;
    padding: 0 14px;
  }
  .feature-inner-block.number {
    z-index: 1;
    background: black;
    font-size: 46px;
    font-weight: bold;
    font-family: "Audiowide";
    transition: all 0.3s ease;
    text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 3px #fff, 0 0 10px #f90,
      0 0 8px #f90, 0 0 0px #f90, 0 0 0px #f90, 0 0 0px #f90;
  }

  @keyframes scaleDownNumber {
    0% {
      width: 300px;
      height: 300px;
    }
    100% {
      width: 80px;
      height: 80px;
    }
  }
  @keyframes moveNumberToPosition {
    0% {
      transform: translate(-50%, -50%);
    }
    100% {
      width: 80px;
      height: 80px;
      transform: translate(90px, 90px);
    }
  }
`;

function FeatureBlock({ number, title, description }) {
  return (
    <div className="feature-block">
      <div className="feature-inner-block">
        <div className="title">{title}</div>
        <div className="desc">{description}</div>
      </div>
      <div
        className="feature-inner-block number"
        style={{
          animation: `moveNumberToPosition 1s ease forwards ${number * 0.2}s`,
        }}
      >
        <div className="number">{number}</div>
      </div>
    </div>
  );
}

const FeaturesArray = [
  {
    title: (
      <div>
        7% Redistribution In <span className="text-glow">BUSD</span>
      </div>
    ),
    description: (
      <div>
        7% of every transactions are redistributed to all holders. Holding{" "}
        <span className="text-glow">BABYDOLLAR</span> earns you{" "}
        <span className="text-glow">BUSD</span> . Minimum 200,000 tokens
      </div>
    ),
  },
  {
    title: "Auto Paid Every 60 Minutes",
    description: (
      <div>
        There's no need to claim, the <span className="text-glow">BUSD</span>{" "}
        rewards will be automatically sent to your wallet every 60 minutes
      </div>
    ),
  },
  {
    title: "3% Auto Liquidity Pool",
    description: (
      <span>
        3% of every transaction will be converted to BABYDOLLAR/BNB Liquidity
        Pool tokens and sent to be burned🔥
      </span>
    ),
  },
  {
    title: "5% Marketing Wallet",
    description: `Marketing Wallet funds will be used for promotion, advertising, audits, giveaway contests and development`,
  },
  {
    title: "100% 🔒Locked LP",
    description: (
      <div>
        In order to be fully transparent,
        <br /> 100% of the liquidity pools
        <br /> are locked for 6 months.
        <br />
        It'll be extended as the project grows.
      </div>
    ),
  },
  {
    title: "💖Friendly Community",
    description: `We believe in transparency and positivity.
    We've one of the most positive and helpful community out there in the crypto space.
`,
  },
];

export function Features({ visible }) {
  return (
    <FeaturesContainer className={!visible ? "hidden" : ""}>
      <FeatureBlocksContainer>
        {FeaturesArray.map(({ title, description }, index) => (
          <FeatureBlock
            key={`feature-${index + 1}`}
            number={index + 1}
            title={title}
            description={description}
          />
        ))}
      </FeatureBlocksContainer>
    </FeaturesContainer>
  );
}

import React from "react";
import styled from "styled-components";

import { IRoute } from "./types";
import { Container } from "../components/Container";
import {
  Checked,
  Spinner,
  FirstBorn,
  BabySteps,
  MoonBaby,
} from "../components/SVGImages";

const FirstBlock = [
  {
    done: true,
    description: "Ideology",
  },
  {
    done: true,
    description: "Build up a core team",
  },
  {
    done: true,
    description: "Web Development (React)",
  },
  {
    done: true,
    description: "First telegram group created",
  },
  {
    done: true,
    description: "Baby Dollar is born",
  },
  {
    done: true,
    description: "Reached 100k Market Cap",
  },
  {
    done: true,
    description: "List in CoinSniper, GemFinder and CoinScope",
  },
  {
    done: true,
    description: "Build a strong community",
  },
];

const SecondBlock = [
  {
    done: true,
    description: "First Marketing Push",
  },
  {
    done: true,
    description: "New Milestone: 300k Market Cap",
  },
  {
    done: true,
    description: "Website Update - Added Features & Roadmap",
  },
  {
    done: true,
    description: "Whitepaper",
  },
  {
    done: false,
    description: "PooCoin Ads",
  },
  {
    done: false,
    description: "DexTools Trending",
  },
  {
    done: true,
    description: "Doxxed Audits from Dessert Finance",
  }
];

const ThirdBlock = [
  {
    done: true,
    description: "Dividend Tracker",
  },
  {
    done: false,
    description: "Deploy website as Progress Web App",
  },
  {
    done: false,
    description: "Push Notification Alerts for rewards!",
  },
  {
    done: false,
    description: "Baby Dollar Club Games",
  },
  {
    done: false,
    description: "Baby Dollar Club 1st Game - Baby Dollar Easter Hunt",
  },
  {
    done: false,
    description: "Baby Dollar Club 1st NFT Merchandise",
  },
  {
    done: false,
    description: "Baby Dollar Club VIP Group (Baby Dollar Bosses only)",
  },
  {
    done: false,
    description: "Baby Dollar Club 2nd Game - BabyPoly, NFT Monopoly Game",
  },
];

const FourthBlock = [
  {
    done: false,
    description: "BabyDollar goes to the moon!",
  },
  {
    done: false,
    description: "Next destination: Mars",
  },
];

const RoadmapContainer = styled.div`
  transition: all 0.3s ease;
  max-width: 100%;
  width: 100%;
  animation: fadeInTransition 0.5s ease forwards;
  transform-origin: top;
  padding: 24px;
  padding-bottom: 54px;
  box-sizing: border-box;
  &.hidden {
    animation: fadeOutTransition 0.5s ease forwards;
  }
  @media (max-width: 480px) {
    &.hidden {
      animation: fadeOutTransition 0.5s ease forwards !important;
    }
  }
`;

const RoadmapBlocksContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px auto;
  position: relative;
  .line {
    width: 2px;
    background: hsl(0deg 0% 100% / 30%);
    height: 100%;
    position: absolute;
    border-radius: 100px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  > * {
    margin: 20px 0;
  }
  .dot {
    border-radius: 100%;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    background: hsl(0deg 0% 40%);
    z-index: 1;
  }
  .dot.dot-1 {
    background: var(--color-brand-primary);
  }
  .dot.dot-2 {
    top: 310px;
    animation: fadeInOutDot 1s ease-in-out infinite alternate;
  }
  .dot.dot-3 {
    top: 626px;
  }
  .dot.dot-4 {
    top: 100%;
  }
  @media (max-width: 830px) {
    .line {
      display: none;
    }
  }

  @keyframes fadeInOutDot {
    0% {
      background: hsl(0deg 0% 40%);
    }
    100% {
      background: #fff;
    }
  }
`;

interface IRoadmapBlock extends React.HTMLAttributes<HTMLDivElement> {
  left: boolean;
  number: number;
}

const RoadmapBlock = styled(
  ({ left, className, number, ...rest }: IRoadmapBlock) => (
    <div
      className={`${className}${left ? " left" : " right"}`}
      style={{
        animation: `fadeInFromBottom .75s ease forwards ${number * 0.5}s`,
      }}
      {...rest}
    />
  )
)`
  border: 1px solid white;
  padding: 10px 20px;
  width: 446px;
  max-width: calc(50% - 40px);
  position: relative;
  opacity: 0;
  .title {
    font-size: 28px;
    font-family: "Audiowide";
    margin-bottom: 10px;
  }
  &.left {
    margin-right: calc(50% + 100px);
  }
  &.right {
    margin-left: calc(50% + 100px);
  }
  .baby-1 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
  }
  .baby-2 {
    position: absolute;
    right: 30px;
    bottom: -30px;
  }
  .baby-3 {
    position: absolute;
    right: -30px;
    bottom: -110px;
  }
  .baby-glow {
    filter: blur(8px) brightness(100);
    z-index: -1;
    opacity: 0.5;
  }

  @media (max-width: 480px) {
    .baby-1,
    .baby-2 {
      z-index: -1;
      opacity: 0.4;
    }
    .baby-1 {
    }
    .baby-3 {
      z-index: -1;
      opacity: 0.4;
      right: 20px;
    }
    .baby-3.baby-glow,
    .baby-2.baby-glow,
    .baby-1.baby-glow {
      display: none;
    }
  }

  @keyframes fadeInFromBottom {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 830px) {
    animation: unset !important;
    margin-left: unset !important;
    margin-right: unset !important;
    opacity: 1 !important;
    width: calc(100% - 60px) !important;
    max-width: unset !important;
  }
`;

interface IRoadmapRow extends React.HTMLAttributes<HTMLDivElement> {
  done: boolean;
  description: string;
}

const RoadmapRow = styled(({ className, done, description }: IRoadmapRow) => (
  <div className={`${className}${done ? " done" : ""}`}>
    <div className="status">
      {done && <Checked />}
      {!done && <Spinner />}
    </div>
    <div className="description">{description}</div>
  </div>
))`
  display: flex;
  align-items: center;
  opacity: 0.9;
  .status {
    width: 20px;
    height: 20px;
    margin-right: 15px;
    overflow: visible;
  }
  .description {
    margin: 2px 0;
    font-size: 14px;
  }
  &:not(.done) .description {
    animation: fadeInOut 1s ease-in-out infinite alternate;
  }
`;

export function Roadmap({ visible }: IRoute) {
  return (
    <RoadmapContainer className={!visible ? "hidden" : ""}>
      <h2>Roadmap</h2>
      <RoadmapBlocksContainer>
        <div className="line">
          <div className="dot dot-1" />
          <div className="dot dot-2" />
          <div className="dot dot-3" />
          <div className="dot dot-4" />
        </div>
        <RoadmapBlock number={1} left={false}>
          <div className="title">Newborn Baby</div>
          {FirstBlock.map(({ done, description }) => (
            <RoadmapRow
              done={Boolean(done)}
              description={description}
              key={description}
            />
          ))}
          <FirstBorn className="baby-1" />
          <FirstBorn className="baby-1 baby-glow" />
        </RoadmapBlock>
        <RoadmapBlock number={2} left>
          <div className="title">Baby Steps</div>
          {SecondBlock.map(({ done, description }) => (
            <RoadmapRow
              done={done}
              description={description}
              key={description}
            />
          ))}
          <BabySteps className="baby-2" />
          <BabySteps className="baby-2 baby-glow" />
        </RoadmapBlock>
        <RoadmapBlock number={3} left={false}>
          <div className="title">Development Stages</div>
          {ThirdBlock.map(({ done, description }) => (
            <RoadmapRow
              done={done}
              description={description}
              key={description}
            />
          ))}
          <MoonBaby className="baby-3" />
          <MoonBaby className="baby-3 baby-glow" />
        </RoadmapBlock>
        <RoadmapBlock number={4} left>
          <div className="title">Space Exploration</div>
          {FourthBlock.map(({ done, description }) => (
            <RoadmapRow
              done={done}
              description={description}
              key={description}
            />
          ))}
        </RoadmapBlock>
      </RoadmapBlocksContainer>
    </RoadmapContainer>
  );
}

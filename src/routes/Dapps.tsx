import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Container } from "../components/Container";

const DappsContainer = styled.div`
  transition: all 0.3s ease;
  animation: fadeInTransition 0.5s ease forwards;
  transform-origin: center top;
  max-width: 100%;
  width: 100%;
  &.hidden {
    animation: fadeOutTransition 0.5s ease forwards;
  }
`;

const DappBlocksContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

const DappBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    45deg,
    hsl(249deg 71% 41% / 70%),
    hsl(271deg 100% 52% / 70%)
  );
  min-height: 300px;
  width: 300px;
  max-width: calc(100% - 36px);
  box-sizing: border-box;
  font-size: 35px;
  text-align: center;
  border-radius: 10px;
  border: 0px solid white;
  font-family: "Audiowide";
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 20px;
  padding: 24px;
  position: relative;
  box-shadow: 0px 0px 14px 2px hsl(269deg 100% 73%);

  .coming-soon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: hsl(0deg 0% 0% / 85%);
    border-radius: 10px;
    text-shadow: 0 0 0px #fff, 0 0 0px #fff, 0 0 8px #ffe, 0 0 7px #9100ff, 0 0 8px #a40cd6, 0 0 0px #f90, 0 0 0px #f90, 0 0 0px #f90;
  }
  .description {
    font-size: 20px;
    margin-top: 24px;
    font-family: "Roboto";
    opacity: 0.7;
  }
  &.soon {
    box-shadow: none;
  }
  &:hover {
    transform: scale(1.03);
  }
`;

function DappBlock({ title, description, comingSoon, path }) {
  const history = useHistory();

  const goToPath = (url) => history && history.push(url);

  return (
    <DappBlockContainer
      onClick={!comingSoon ? () => goToPath(path) : undefined}
      className={comingSoon ? "soon" : ""}
    >
      <div className="title">{title}</div>
      <div className="description">{description}</div>
      {comingSoon && <div className="coming-soon">Coming Soon</div>}
    </DappBlockContainer>
  );
}

const DappsArray = [
  {
    title: "Earnings Dashboard",
    description: "Keep track of all your Baby Token rewards!",
    path: "/dashboard",
  },
  {
    comingSoon: true,
    title: "BabyDollar Easter Hunt",
    description: "Find the easter egg within the game and win $BUSD Prizes!",
  },
];

export function Dapps({ visible }) {
  return (
    <DappsContainer className={!visible ? "hidden" : ""}>
      <DappBlocksContainer>
        {DappsArray.map(({ title, description, path, comingSoon }, index) => (
          <DappBlock
            key={`dapp-${index + 1}`}
            title={title}
            description={description}
            path={path}
            comingSoon={comingSoon}
          />
        ))}
      </DappBlocksContainer>
    </DappsContainer>
  );
}

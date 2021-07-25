import React from "react";
import styled from "styled-components";

const RoadmapContainer = styled.div`
  transition: all 0.3s ease;
  animation: fadeInTransition 0.5s ease forwards;
  opacity: 0;
  transform: scale(0);
  max-width: 100%;
  &.hidden {
    animation: fadeOutTransition 0.5s ease forwards;
  }
`;

export function Roadmap({ visible }) {
  return (
    <RoadmapContainer className={!visible ? 'hidden' : ''}>
      <div className="work-in-progress">COMING SOON</div>
    </RoadmapContainer>
  );
}

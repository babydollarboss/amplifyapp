import React from "react";
import styled from "styled-components";

import { Home } from "./Home";
import { Features } from "./Features";
import { Roadmap } from "./Roadmap";
import { DelayedComponents } from "../components/DelayedComponents";

const RouteContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export function Routes({ location }) {
  const { pathname } = location;

  return (
    <RouteContainer>
      <DelayedComponents delayMount={400} delayUnmount={300} isMounted={pathname === "/"}>
        <Home visible={pathname === "/"} />
      </DelayedComponents>
      <DelayedComponents delayMount={400} delayUnmount={300} isMounted={pathname === "/features"}>
        <Features visible={pathname === "/features"} />
      </DelayedComponents>
      <DelayedComponents delayMount={400} delayUnmount={300} isMounted={pathname === "/roadmap"}>
        <Roadmap visible={pathname === "/roadmap"} />
      </DelayedComponents>
    </RouteContainer>
  );
}

import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Home } from "./Home";
import { Features } from "./Features";
import { Roadmap } from "./Roadmap";
import { Dapps } from "./Dapps";
import { Dashboard } from "./Dashboard";
import { DelayedComponents } from "../components/DelayedComponents";

const RouteContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export function Routes() {
  const history = useHistory();
  const { location } = history;
  const { pathname } = location;

  return (
    <RouteContainer>
      <DelayedComponents
        delayMount={400}
        delayUnmount={300}
        isMounted={pathname === "/"}
      >
        <Home visible={pathname === "/"} />
      </DelayedComponents>
      <DelayedComponents
        delayMount={400}
        delayUnmount={300}
        isMounted={pathname === "/features"}
      >
        <Features visible={pathname === "/features"} />
      </DelayedComponents>
      <DelayedComponents
        delayMount={400}
        delayUnmount={300}
        isMounted={pathname === "/roadmap"}
      >
        <Roadmap visible={pathname === "/roadmap"} />
      </DelayedComponents>
      <DelayedComponents
        delayMount={400}
        delayUnmount={300}
        isMounted={pathname === "/dapps"}
      >
        <Dapps visible={pathname === "/dapps"} />
      </DelayedComponents>
      <DelayedComponents
        delayMount={400}
        delayUnmount={300}
        isMounted={pathname === "/dashboard"}
      >
        <Dashboard visible={pathname === "/dashboard"} />
      </DelayedComponents>
    </RouteContainer>
  );
}

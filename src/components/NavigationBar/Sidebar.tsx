import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { MenuItems } from "./constants";

const SidebarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 5;
  background: linear-gradient(
    181deg,
    hsl(255deg 100% 6% / 90%),
    hsl(233deg 98% 5% / 90%)
  );
  transform: translateX(0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(100%);
  opacity: 0;
  pointer-events: none;
  transition: all 0.5s ease;
  &.active {
    transform: translateX(0);
    opacity: 1;
    pointer-events: auto;
  }
`;

const SidebarMenuItem = styled.button`
  font-size: 32px;
  font-family: Audiowide;
  color: #fff;
  text-decoration: none;
  margin: 15px 0;
  opacity: 0.8;
  transition: all 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

const SidebarMenuLink = styled.a`
  font-size: 32px;
  font-family: Audiowide;
  color: #fff;
  text-decoration: none;
  margin: 15px 0;
  opacity: 0.8;
  transition: all 0.3s ease;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;


interface ISidebar {
  active: boolean;
  setSidebarActive: (active: boolean) => void;
}

export function Sidebar({ setSidebarActive, active }: ISidebar) {
  const history = useHistory();

  const goToPath = (path: string) => {
    if (history) {
      history.push(path);
      setSidebarActive(false);
    }
  };

  return (
    <SidebarContainer className={active ? "active" : ""}>
      {MenuItems.map(({ title, path, externalPath }) => !externalPath ? (
        <SidebarMenuItem
          type="button"
          key={title}
          onClick={() => goToPath(path)}
        >
          {title}
        </SidebarMenuItem>
      ) : (
        <SidebarMenuLink key={title} target="_blank" rel="noreferrer" href={externalPath}>{title}</SidebarMenuLink>
      ))}
    </SidebarContainer>
  );
}

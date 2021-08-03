import styled from "styled-components";

export const Main = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  .gradient-bg {
    position: fixed;
    background: linear-gradient(181deg, hsl(233deg 98% 5%), rgb(33 0 136));
    z-index: 0;
    width: 100%;
    height: 100%;
    opacity: 0.4;
  }
`;

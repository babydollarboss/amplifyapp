import React from "react";
import styled from "styled-components";

export const TweeterIcon = styled(({ className }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <g>
      <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
    </g>
  </svg>
))`
  width: 24px;
  height: 24px;
  fill: var(--color-brand-primary);
`;

export const TelegramIcon = styled(({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className={className}
  >
    <path className="circle" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" />
    <path
      fill="#fff"
      d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
    />
    <path
      fill="#b0bec5"
      d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
    />
    <path
      fill="#cfd8dc"
      d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
    />
  </svg>
))`
  width: 24px;
  height: 24px;
  fill: var(--color-brand-primary);
  path.circle {
    fill: var(--color-brand-primary);
  }
`;

export const LogoIcon = styled(({ className }) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 371.44 443.81"
    className={className}
  >
    <defs></defs>
    <circle className="cls-1" cx="185.72" cy="185.72" r="180.72" />
    <path
      className="cls-2"
      d="M650.88,367.71c-22,44.23-84,35.65-89.21,6.22a40.57,40.57,0,0,0-.37,5.89c.31,32.45,66.64,43.72,89.58-2.37,6-12.07,7.31-22.56,6.44-31.26A61,61,0,0,1,650.88,367.71Z"
      transform="translate(-413.6 -209.88)"
    />
    <path
      className="cls-3"
      d="M599.56,231.68c94.7,0,171.79,76.88,174.55,172.78.06-1.77.09-3.55.09-5.33C774.2,300.76,696,221,599.56,221S424.91,300.76,424.91,399.13c0,1.78,0,3.56.09,5.33C427.76,308.56,504.85,231.68,599.56,231.68Z"
      transform="translate(-413.6 -209.88)"
    />
    <path
      className="cls-4"
      d="M498.22,577s-61.92,11.37-72-37.91,43-32.86,43-32.86-52.43-71.43-23.11-141.74c26.18-62.77,166.13-90.31,173-18.63,3,31.93-33.79,47.19-47.5,32.74A19.09,19.09,0,0,1,566,366.2a1.68,1.68,0,0,0-3.29-.4,39.93,39.93,0,0,0-1.49,11.34c.31,32.45,66.64,43.72,89.58-2.38,15-30,.76-50.31-3.46-57.59a1.94,1.94,0,0,1,1.93-2.91c28.45,3.64,186.36,31.5,83,192.15,0,0,53.28-10,37,39.42-11.72,35.45-65.29,32.29-65.29,32.29s-23.18,53.16-101.22,52.71C535.89,630.44,498.22,577,498.22,577Z"
      transform="translate(-413.6 -209.88)"
    />
    <path
      className="cls-5"
      d="M460.79,503.74c0-12.35-45.33-14.7-35.22,34.58s72,37.91,72,37.91,37.67,53.46,104.47,53.84c78,.46,101.23-52.71,101.23-52.71s53.57,3.17,65.29-32.29c16.32-49.39-37-39.42-37-39.42q2.5-3.88,4.79-7.66"
      transform="translate(-413.6 -209.88)"
    />
    <path
      className="cls-6"
      d="M769.21,533.16c-11.72,35.45-65.29,32.29-65.29,32.29s-23.19,53.16-101.22,52.71c-66.81-.39-104.48-53.84-104.48-53.84s-61.92,11.37-72-37.91c-.27-1.32-.48-2.57-.67-3.79-.93,4.71-.85,10.62.67,18,10.11,49.28,72,37.9,72,37.9S535.89,632,602.7,632.39c78,.45,101.22-52.71,101.22-52.71s53.57,3.16,65.29-32.29c3.31-10,3.76-17.61,2.36-23.32A69.31,69.31,0,0,1,769.21,533.16Z"
      transform="translate(-413.6 -209.88)"
    />
    <ellipse className="cls-7" cx="84.8" cy="317.26" rx="32.03" ry="21.6" />
    <ellipse className="cls-7" cx="292.86" cy="320.17" rx="32.03" ry="21.6" />
    <ellipse className="cls-8" cx="189.26" cy="368.27" rx="65.79" ry="43.86" />
    <ellipse className="cls-9" cx="189.26" cy="368.27" rx="59.28" ry="39.52" />
    <path
      className="cls-10"
      d="M602.86,585.94c-26,0-47.14,15.17-47.14,33.87s21.11,33.87,47.14,33.87S650,638.52,650,619.81,628.9,585.94,602.86,585.94Zm0,59.06c-19.36,0-35.05-11.28-35.05-25.19s15.69-25.18,35.05-25.18,35.06,11.27,35.06,25.18S622.22,645,602.86,645Z"
      transform="translate(-413.6 -209.88)"
    />
    <circle className="cls-11" cx="189.26" cy="372.88" r="23.14" />
    <circle className="cls-12" cx="189.26" cy="376.07" r="23.14" />
    <path
      className="cls-13"
      d="M682.51,538.48A82.64,82.64,0,0,1,667.75,537a67.52,67.52,0,0,1-11.07-3,61.24,61.24,0,0,1-9.63-4.49,64.68,64.68,0,0,1-19.65-17.56c-14.94-19.8-18.6-45.07-21-55,0,0,24.69-9.08,63.07-12.73,9.68-.91,20.24-1.47,31.49-1.47,9.11,0,18.7.38,28.65,1.28,4.57.42,8.13,3.89,8.23,8.11C738.4,474.29,735.59,539.28,682.51,538.48Z"
      transform="translate(-413.6 -209.88)"
    />
    <g className="cls-14">
      <rect
        className="cls-15"
        x="663.7"
        y="452.16"
        width="14"
        height="33.9"
        transform="translate(114.56 -546.73) rotate(45)"
      />
      <rect
        className="cls-15"
        x="684.18"
        y="476.53"
        width="14"
        height="52.67"
        transform="translate(144.42 -551.33) rotate(45)"
      />
      <rect
        className="cls-15"
        x="670.47"
        y="462.83"
        width="14"
        height="52.7"
        transform="translate(130.73 -545.65) rotate(45)"
      />
      <rect
        className="cls-15"
        x="643.47"
        y="481.89"
        width="14.45"
        height="14.45"
        rx="2.74"
        transform="translate(122.84 -526.73) rotate(45)"
      />
    </g>
    <g className="cls-16">
      <path
        className="cls-17"
        d="M700.94,442.72l-53.89,86.75a64.68,64.68,0,0,1-19.65-17.56l42.05-67.72C679.13,443.28,689.69,442.72,700.94,442.72Z"
        transform="translate(-413.6 -209.88)"
      />
      <path
        className="cls-17"
        d="M725.68,443.68,667.75,537a67.52,67.52,0,0,1-11.07-3l56.47-90.89Z"
        transform="translate(-413.6 -209.88)"
      />
    </g>
    <path
      className="cls-13"
      d="M683.47,542h-1c-26.45-.4-46.87-11.14-60.68-31.93-11.18-16.84-15.28-36-17.73-47.42-.41-1.91-.76-3.56-1.09-4.9a3.52,3.52,0,0,1,2.21-4.13c.54-.2,13.64-5,35.63-9a335.68,335.68,0,0,1,89.1-4.12c6.37.58,11.29,5.53,11.44,11.52.42,15.75-.88,54.63-21.72,75.71C710.25,537.21,698.09,542,683.47,542Zm-73-82.76c.13.61.27,1.25.41,1.93,4.68,21.83,15.62,72.94,71.64,73.78,13.07.2,23.86-3.9,32-12.18,18.93-19.15,20.08-55.73,19.69-70.57-.07-2.43-2.23-4.44-5-4.69C669.37,442.14,622.41,455.44,610.52,459.25Z"
      transform="translate(-413.6 -209.88)"
    />
    <path
      className="cls-13"
      d="M594.05,456.91c-2.41,9.93-6.07,35.2-21,55a64.88,64.88,0,0,1-19.66,17.57,60.68,60.68,0,0,1-9.62,4.48,67.79,67.79,0,0,1-11.07,3,81.72,81.72,0,0,1-14.77,1.48h-.81c-.79,0-1.56,0-2.32,0-50-1.76-52.74-64.6-52.18-86.33.11-4.23,3.66-7.69,8.24-8.11,9.94-.9,19.53-1.29,28.65-1.29,7.2,0,14.09.23,20.68.65h0c3.7.21,7.31.49,10.79.83,6.39.6,12.39,1.35,18,2.2q6,.9,11.24,1.9c4.16.77,8,1.58,11.44,2.37A198.69,198.69,0,0,1,594.05,456.91Z"
      transform="translate(-413.6 -209.88)"
    />
    <g className="cls-14">
      <rect
        className="cls-15"
        x="507.5"
        y="451.97"
        width="14"
        height="33.9"
        transform="translate(68.67 -436.34) rotate(45)"
      />
      <rect
        className="cls-15"
        x="527.98"
        y="476.34"
        width="14"
        height="52.67"
        transform="translate(98.54 -440.93) rotate(45)"
      />
      <rect
        className="cls-15"
        x="514.27"
        y="462.64"
        width="14"
        height="52.7"
        transform="translate(84.85 -435.25) rotate(45)"
      />
      <rect
        className="cls-15"
        x="487.27"
        y="481.7"
        width="14.45"
        height="14.45"
        rx="2.74"
        transform="translate(76.96 -416.33) rotate(45)"
      />
    </g>
    <g className="cls-16">
      <path
        className="cls-17"
        d="M549,446.39l-52.78,85c-11-2.48-16.57-9.28-19.65-17.56l43.66-70.43h0c3.7.21,7.31.49,10.79.83C537.37,444.79,543.37,445.54,549,446.39Z"
        transform="translate(-413.6 -209.88)"
      />
      <path
        className="cls-17"
        d="M571.63,450.66l-54.52,87.82-.24.4c-.71-.12-1.39-.26-2.08-.44a63.77,63.77,0,0,1-9-2.6l54.39-87.55C564.35,449.06,568.16,449.87,571.63,450.66Z"
        transform="translate(-413.6 -209.88)"
      />
    </g>
    <path
      className="cls-13"
      d="M517,542c-14.62,0-26.78-4.8-36.15-14.28-20.84-21.08-22.13-60-21.72-75.71.15-6,5.07-10.94,11.44-11.52a335.26,335.26,0,0,1,89.1,4.12c22,4,35.09,8.8,35.63,9a3.52,3.52,0,0,1,2.21,4.13c-.33,1.34-.68,3-1.09,4.9-2.45,11.44-6.55,30.58-17.73,47.42C564.84,530.86,544.42,541.6,518,542Zm-17.48-95.75c-9,0-18.5.37-28.32,1.26-2.81.25-5,2.26-5,4.69-.38,14.84.76,51.42,19.69,70.57,8.19,8.28,19,12.38,32.05,12.18,56-.84,67-52,71.64-73.78.14-.68.28-1.32.41-1.93C580,456.07,545.46,446.26,499.48,446.26Z"
      transform="translate(-413.6 -209.88)"
    />
    <rect className="cls-13" x="164.31" y="242.3" width="44.62" height="22.34" />
    <path
      className="cls-3"
      d="M644.72,318.27c3.62,7.06,7.52,26.76-8.7,53.85-10.41,17.37-27.5,24.91-43.75,25.6,19.29,3.39,43.05-2.88,56.18-24.79,16.22-27.09,3.78-46.88.16-53.94-.2-.39-3.46-1.56-3.38-1.93"
      transform="translate(-413.6 -209.88)"
    />
  </svg>
))`
  .cls-1 {
    fill: #f2bc86;
  }
  .cls-1,
  .cls-5 {
    stroke: #1f0a08;
    stroke-width: 10px;
  }
  .cls-1,
  .cls-5,
  .cls-9 {
    stroke-miterlimit: 10;
  }
  .cls-2 {
    opacity: 0.2;
  }
  .cls-17,
  .cls-3 {
    fill: #fff;
  }
  .cls-16,
  .cls-3,
  .cls-6 {
    opacity: 0.3;
  }
  .cls-4,
  .cls-5 {
    fill: #f7dfe6;
  }
  .cls-7 {
    fill: #e37864;
  }
  .cls-12,
  .cls-8 {
    fill: #f6f6f6;
  }
  .cls-8 {
    opacity: 0.3;
  }
  .cls-9 {
    fill: #64c3d2;
    stroke: #0095ad;
    stroke-width: 4px;
  }
  .cls-10 {
    fill: #e30613;
  }
  .cls-11 {
    fill: #ad9fa7;
  }
  .cls-13 {
    fill: #3d2516;
  }
  .cls-14 {
    opacity: 0.8;
  }
  .cls-15 {
    fill: #f6b800;
  }
`;

import React from "react";
import {
  OuterRing,
  RingOne,
  RingTwo,
} from './components';

const MainSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="svg5"
      // width="500"
      // height="500"
      width="75%"
      height="auto"
      version="1.1"
      viewBox="0 0 132.292 132.292"
    >
      <defs className="defs2">
        <marker
          className="Arrow1Lstart"
          orient="auto"
          overflow="visible"
          refX="0"
          refY="0"
        >
          <path
            className="path1165"
            fill="context-stroke"
            fillRule="evenodd"
            stroke="context-stroke"
            strokeWidth=".8pt"
            d="M10 0l4-4L0 0l14 4-4-4z"
          ></path>
        </marker>
      </defs>
      <OuterRing />
      <RingOne />
      <RingTwo />
      <g className="layer7">
        <circle
          className="path321-3"
          cx="66.146"
          cy="66.146"
          r="32.747"
          fill="none"
          stroke="#168a94"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.529"
          display="inline"
        ></circle>
      </g>
    </svg>
  );
}

export default MainSvg;
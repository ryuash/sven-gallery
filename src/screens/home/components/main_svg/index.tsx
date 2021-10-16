import React from "react";
import { OuterRing } from './components';

const MainSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="svg5"
      width="500"
      height="500"
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
      <g className="layer4" display="inline">
        <path
          className="path321-8"
          fill="none"
          stroke="#ef8082"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.819"
          d="M77.97 32.602a35.566 35.566 0 0123.742 33.544h0a35.566 35.566 0 01-35.566 35.566A35.566 35.566 0 0130.58 66.146a35.566 35.566 0 019.542-24.243"
          display="inline"
        ></path>
      </g>
      <g className="layer6">
        <path
          className="path4131"
          fill="none"
          stroke="#d13261"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.529"
          d="M90.809 89.558a34.006 34.006 0 01-24.663 10.593A34.006 34.006 0 0132.14 66.146 34.006 34.006 0 0166.146 32.14a34.006 34.006 0 0127.73 14.323"
          display="inline"
        ></path>
      </g>
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

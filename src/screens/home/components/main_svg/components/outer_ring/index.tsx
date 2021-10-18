import React from 'react';
import { useSpring, animated } from "react-spring";

const OuterRing = () => {
  const style = useSpring({
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    },
    reset: true,
    config: { duration: 100000 },
    loop: true,
  });

  return (
    <>
      <g className="layer3" display="inline">
        <animated.path
          className="path321-7"
          fill="#2b384a"
          fillOpacity="1"
          stroke="none"
          strokeDasharray="0.791, 0.791"
          strokeDashoffset="0"
          strokeLinecap="round"
          strokeLinejoin="bevel"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.791"
          d="M250 97A153 153 0 0097 250a153 153 0 00153 153 153 153 0 00153-153A153 153 0 00250 97zm0 13a140 140 0 01140 140 140 140 0 01-140 140 140 140 0 01-140-140 140 140 0 01140-140z"
          display="inline"
          transform="scale(.26458)"
        />
      </g>
      <animated.g
        className="layer5"
        display="inline"
        style={{
          transformOrigin: 'center', // <- make it centre
          ...style,
        }}
      >
        <animated.ellipse
          className="path321-7-6"
          cx="66.146"
          cy="66.145"
          fill="none"
          fillOpacity="1"
          stroke="#bfd9d0"
          strokeDasharray="2.11666675,0.52916669"
          strokeDashoffset="0.529"
          strokeLinejoin="bevel"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.529"
          display="inline"
          rx="38.738"
          ry="38.739"
        />
      </animated.g>
    </>
  )
}

export default OuterRing;

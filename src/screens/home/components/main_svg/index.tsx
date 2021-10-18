import React from "react";
import { useSpring, animated } from "react-spring";
import {
  OuterRing,
  RingOne,
  RingTwo,
  CenterText,
  InnerRing,
  BaseRing,
  Trees,
  Pillars,
  Mountains,
  Dorm,
  Pond,
  Welcome,
  Building,
} from './components';

const MainSvg = () => {
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
      <animated.g
        style={{
          transformOrigin: 'center', // <- make it centre
          ...style,
        }}
      >
        <Pillars />
        <Mountains />
        <Dorm />
        <Pond />
        <Welcome />
        <Building />
        <Trees />
      </animated.g>
      <BaseRing />
      <CenterText />
      <OuterRing />
      <RingOne />
      <RingTwo />
      <InnerRing />
    </svg>
  );
}

export default MainSvg;

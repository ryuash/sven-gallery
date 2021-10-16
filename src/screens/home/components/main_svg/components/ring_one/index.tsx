import React from 'react';
import { useSpring, animated } from "react-spring";

const RingOne = () => {
  const style = useSpring({
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    },
    reset: true,
    config: { duration: 30000 },
    loop: true,
  });

  return (
    <animated.g
      className="layer4"
      display="inline"
      style={{
        transformOrigin: 'center', // <- make it centre
        // transformBox: 'fill-box', // <- of the element÷
        ...style,
      }}
    >
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
    </animated.g>
  )
}

export default RingOne;

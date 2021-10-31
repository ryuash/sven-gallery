import React from 'react';
import { useSpring, animated } from "react-spring";

const RingTwo = () => {
  const style = useSpring({
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(-360deg)'
    },
    reset: true,
    config: { duration: 60000 },
    loop: true,
  });
  return (
    <animated.g
      className="layer6"
      style={{
        transformOrigin: 'center', // <- make it centre
        // transformBox: 'fill-box', // <- of the element÷
        ...style,
      }}
    >
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
    </animated.g>
  )
}

export default RingTwo;

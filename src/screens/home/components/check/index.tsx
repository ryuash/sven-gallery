import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const Checkmark = ({ toggle }) => {
  const [length, setLength] = useState(null);
  const animatedStyle = useSpring({
    // we do *not* animating this property, we just set it up
    strokeDasharray: length,
    strokeDashoffset: toggle ? 0 : length
  });

  return (
    <animated.path
      style={animatedStyle}
      ref={(ref) => {
        // The ref is `null` on component unmount
        if (ref) {
          setLength(ref.getTotalLength());
        }
      }}
      stroke="#4ADE80"
      strokeWidth="24"
      d="M75 153.5l68.081 77.5L235 97"
    />
  )
}

export default Checkmark;

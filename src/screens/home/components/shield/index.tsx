import React from 'react';
import { useSpring } from 'react-spring';
import { animated  } from 'react-spring';
import { useAnimatedPath } from '../../hooks';

const ShieldPart = ({ color, d }) => {
  const { style, ref} = useAnimatedPath();
  const animatedStyle = useSpring({
    from: {
      fill: 'white'
    },
    to: {
      fill: color,
    },
    delay: 350
  })
  return (
    <animated.path
      style={{
        ...style,
        ...animatedStyle
      }}
      ref={ref}
      // fill={color}
      fill="none"
      stroke={color}
      strokeWidth="2"
      d={d}
    />
  );
}

export default ShieldPart;

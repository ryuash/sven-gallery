import React from 'react';
import { animated  } from 'react-spring';
import { useAnimatedPath } from '../../hooks';

const Checkmark = () => {
  const { style, ref} = useAnimatedPath(700);

  return (
    <animated.path
      style={style}
      ref={ref}
      stroke="#4ADE80"
      strokeWidth="24"
      d="M75 153.5l68.081 77.5L235 97"
    />
  )
}

export default Checkmark;

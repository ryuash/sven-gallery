import { useState } from 'react';
import { useSpring } from 'react-spring';

export const useAnimatedPath = (delay = 0) => {
  const [length, setLength] = useState(null);
  const animatedStyle = useSpring({
    from: {
      strokeDashoffset: length,
      strokeDasharray: length,
    },
    to: {
      strokeDashoffset: 0,
      strokeDasharray: length,
    },
    delay
  })

  return ({
    style: animatedStyle,
    ref: (ref) => {
      // The ref is `null` on component unmount
      if (ref) {
        setLength(ref.getTotalLength());
      }
    }
  })
}

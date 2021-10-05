import React from 'react';

const ShieldPart = ({ color, d }) => {
  return (
    <path
      fill={color}
      stroke={color}
      strokeWidth="2"
      d={d}
    />
  );
}

export default ShieldPart;

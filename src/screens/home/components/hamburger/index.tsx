import React from 'react';

const Hamburger = () => {
  return (
    <svg className="hamburger" viewBox="0 0 100 80" width="40" height="40">
      <rect className="line-1" width="100" height="20" />
      <rect className="line-2" y="30" width="100" height="20"/>
      <rect className="line-3" y="60" width="100" height="20"/>
    </svg>
  )
}

export default Hamburger;

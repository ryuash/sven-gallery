import React, {useEffect, useState} from 'react';
import {
  Mailbox,
  Hamburger,
  ShieldPart,
  Checkmark
} from './components';
import {
  BaseContainer,
  SvgContainer,
  CodeContainer
} from './styles';

const Home = () => {
  return (
    <BaseContainer>
      <CodeContainer>
        Code here
      </CodeContainer>
      <SvgContainer>
        SVG HERE
      </SvgContainer>
      {/* <Hamburger />
      <Mailbox /> */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="286"
        height="334"
        fill="none"
        viewBox="0 0 286 334"
      >
        <ShieldPart
          d="M 143, 333 C 31.09 261.823 1 73.61 1 73.61 L 143 1 v 332 z"
          color="#A78BFA"
        />
        <ShieldPart
          d="M 143, 333 C 254.911 261.823 285 73.61 285 73.61 L 143 1 v 332 z"
          color="#8B5CF6"
        />
        <Checkmark />
      </svg> */}
    </BaseContainer>
  )
}

export default Home;

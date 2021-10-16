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
    </BaseContainer>
  )
}

export default Home;

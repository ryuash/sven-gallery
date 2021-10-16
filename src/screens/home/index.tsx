import React, {useEffect, useState} from 'react';
import { MainSvg } from './components';
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
        <MainSvg />
      </SvgContainer>
    </BaseContainer>
  )
}

export default Home;

import React from 'react';
import { MainSvg, Code } from './components';
import {
  BaseContainer,
  SvgContainer,
  CodeContainer,
} from './styles';

const Home = () => {
  return (
    <BaseContainer>
      <CodeContainer>
        <Code />
      </CodeContainer>
      <SvgContainer>
        <MainSvg />
      </SvgContainer>
    </BaseContainer>
  )
}

export default Home;

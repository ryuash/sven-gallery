import React from 'react';
import { MainSvg, Highlight } from './components';
import {
  BaseContainer,
  SvgContainer,
  CodeContainer,
} from './styles';

const Home = () => {
  return (
    <BaseContainer>
      <CodeContainer>
        <Highlight />
      </CodeContainer>
      <SvgContainer>
        <MainSvg />
      </SvgContainer>
    </BaseContainer>
  )
}

export default Home;

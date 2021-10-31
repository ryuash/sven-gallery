import React from "react";
import { CodeContainer } from './styles';
import {content} from './utils';

const Highlighter = () => {

  return (
    <pre>
      <CodeContainer>
        {content}
      </CodeContainer>
    </pre>
  );
}

export default Highlighter;


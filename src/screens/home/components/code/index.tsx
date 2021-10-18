import React from 'react';
import Highlighter from '../highlight';
import { content } from './utils';
const Code = () => {
  return (
    <Highlighter
      content={content}
    />
  )
}

export default Code;

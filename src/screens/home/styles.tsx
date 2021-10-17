import styled from 'styled-components';

export const BaseContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
`;

export const CodeContainer = styled.div`
  background: yellow;
`;

export const SvgContainer = styled.div`
  grid-column: auto / span 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
`;

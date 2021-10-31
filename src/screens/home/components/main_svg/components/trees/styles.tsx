import styled from 'styled-components';

export const BounceCss = styled.g`
  animation: bounce 3s ease infinite;
  // transform-origin: center;
  transform-box: fill-box;

  @keyframes bounce {
    0%   { transform: scale(1, 1); }
    10%  { transform: scale(1.1, .9); }
    20%  { transform: scale(.9, 1); }
    30%  { transform: scale(1, .9); }
    40% { transform: scale(1, 1); }
    100% { transform: scale(1, 1); }
    // 0%   { transform: scale(1, 1); }
    // 10%  { transform: scale(1.1, .9); }
    // 30%  { transform: scale(.9, 1.1); }
    // 50%  { transform: scale(1, 1); }
    // 100% { transform: scale(1, 1); }
  }
`;

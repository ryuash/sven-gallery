import styled from 'styled-components';

export const FlickerCss = styled.path`
  animation: flicker 5s linear infinite;

  @keyframes flicker {
    0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
      opacity: .99;
    }
    20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
      opacity: 0.4;
    }
  }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.main};
    background: radial-gradient(
      circle at top left,
      ${({ theme }) => theme.colors.backgroundGradient[0]},
      ${({ theme }) => theme.colors.backgroundGradient[1]},
      ${({ theme }) => theme.colors.backgroundGradient[2]}
    );
    animation: bgAnimation 20s ease infinite;
    color: ${({ theme }) => theme.colors.text};
  }

  @keyframes bgAnimation {
    0%   { background-position: 0% 0%; }
    50%  { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  }
`;

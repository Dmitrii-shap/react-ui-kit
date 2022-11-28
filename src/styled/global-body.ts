import { createGlobalStyle } from 'styled-components';

export const GlobalBody = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.commonTypography.fontFamily};
  }
`;

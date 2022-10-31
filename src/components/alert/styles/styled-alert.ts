import styled, { keyframes } from 'styled-components';
import { AlertStyledProps, AlertTypes } from '../models';
import { PaletteKeys } from '../../../types/theme';

const showAlert = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const StyledAlert = styled.div<AlertStyledProps>`
  padding: 16px;
  background: ${({ theme, color }) => theme.palette[colorBgMap[color]]};
  color: ${({ theme, color }) => theme.palette[colorMap[color]]};
  box-shadow: 0 4px 20px rgba(92, 133, 150, 0.24);
  border-radius: 8px;
  min-width: 220px;

  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
  opacity: 1;
  animation: ${showAlert} 300ms ease-in;

  & + & {
    margin-top: 12px;
  }
`;

const colorMap: Record<AlertTypes, PaletteKeys> = {
    info: 'black',
    success: 'white',
    error: 'white',
    warning: 'black',
};

const colorBgMap: Record<AlertTypes, PaletteKeys> = {
    info: 'white',
    success: 'primary',
    error: 'error',
    warning: 'warning',
};

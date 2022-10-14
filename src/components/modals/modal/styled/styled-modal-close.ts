import styled, { css } from 'styled-components';
import { Button } from '../../../button/Button';
import { StyledModalCloseProps } from '../models';

export const StyledModalClose = styled(Button)<StyledModalCloseProps>`
  position: absolute;
  cursor: pointer;
  z-index: 1001;
  background: transparent;
  width: 28px;
  height: 28px;
  padding: 0;

  ${({ outsideClose }) => outsideClose ? outsideCss : defaultPositionCss}
  
  transition: .5s;
  &:hover {
    transform: rotate(90deg);
  }
`;

const outsideCss = css`
  top: -36px;
  right: 0;
  fill: ${({ theme }) => theme.palette.white};
`;

const defaultPositionCss = css`
  top: 16px;
  right: 16px;
  fill: ${({ theme }) => theme.palette.gray['400']};
`;

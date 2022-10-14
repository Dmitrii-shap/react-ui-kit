import styled, { keyframes } from 'styled-components';
import { StyledModalProps } from '../models';

const modalFadeIn = keyframes`
  0% {
    animation-timing-function: cubic-bezier(0.2242, 0.7499, 0.3142, 0.8148);
    opacity: 0;
  }
  100% {
    opacity: 1;
`;

export const StyledModal = styled.div<StyledModalProps>`
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ index }) => 1000 + index};
  box-sizing: border-box;

  animation: ${modalFadeIn} 0.3s 1 linear;
  animation-fill-mode: forwards;
  opacity: 0;
`;

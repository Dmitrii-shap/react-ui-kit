import styled from 'styled-components';
import { StyledModalProps } from '../models';
import {motion} from 'framer-motion';

export const StyledModal = styled(motion.div)<StyledModalProps>`
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
  z-index: ${({ index }) => index};
  box-sizing: border-box;
`;

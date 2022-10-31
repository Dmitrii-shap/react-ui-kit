import styled from 'styled-components';
import { StyledAlertManagerProps } from '../models';

export const StyledAlertContainer = styled.div<StyledAlertManagerProps>`
  position: fixed;
  ${({ positions }) => `${positions[0]}: 60px`};
  ${({ positions }) => `${positions[1]}: 60px`};
  z-index: 999999;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.breakpoints.down('xs')} {
    ${({ positions }) => `${positions[1]}: 20px`};
  }
`;

import styled from 'styled-components';
import { StyledAlertManagerProps } from '../models';

export const StyledAlertContainer = styled.div<StyledAlertManagerProps>`
  position: fixed;
  ${({ positions }) => `${positions[0]}: 30px`};
  ${({ positions }) => `${positions[1]}: 30px`};
  z-index: 999999;
  display: flex;
  flex-direction: column;
  align-items: ${({ positions }) => `${positions[1] === 'left' ? 'flex-start' : 'flex-end'}`};

  ${({ theme }) => theme.breakpoints.down('xs')} {
    ${({ positions }) => `${positions[1]}: 20px`};
  }
`;

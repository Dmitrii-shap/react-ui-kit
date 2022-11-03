import styled from 'styled-components';
import { ThemeSelector } from '../../../../theme';
import { StyledButton } from '../../../button/styles';
import { StyledModalActionsProps } from '../models';
import { defaultPaddingRatio, defaultPaddingRatioXs } from '../constants/default-padding-ratio';

const { spacing } = ThemeSelector;

export const StyledModalActions = styled.div<StyledModalActionsProps>`
  padding: ${spacing(defaultPaddingRatio)}px;
  display: flex;
  align-items: center;
  justify-content: ${({align}) => align};

  ${({theme}) => theme.breakpoints.down('xs')} {
    padding: ${spacing(defaultPaddingRatioXs)}px;
  }
  
  ${StyledButton} + ${StyledButton} {
    margin-left: ${spacing(2)}px;
  }
`

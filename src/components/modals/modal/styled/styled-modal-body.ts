import styled from 'styled-components';
import { ThemeSelector } from '../../../../theme';
import { defaultPaddingRatio, defaultPaddingRatioXs } from '../constants/default-padding-ratio';

const { spacing } = ThemeSelector;

export const StyledModalBody = styled.div`
  padding: ${spacing(defaultPaddingRatio)}px;

  ${({theme}) => theme.breakpoints.down('xs')} {
    padding: ${spacing(defaultPaddingRatioXs)}px;
  }
`

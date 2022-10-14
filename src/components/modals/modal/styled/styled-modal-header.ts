import styled from 'styled-components';
import { ThemeSelector } from '../../../../theme';
import { defaultPaddingRatio, defaultPaddingRatioXs } from '../constants/default-padding-ratio';

const { spacing } = ThemeSelector;

export const StyledModalHeader = styled.div`
  padding: ${spacing(6)}px ${spacing(defaultPaddingRatio)}px 0;
  min-height: 50px;

  ${({theme}) => theme.breakpoints.down('xs')} {
    padding-left: ${spacing(defaultPaddingRatioXs)}px;
    padding-right: ${spacing(defaultPaddingRatioXs)}px;
  }
`

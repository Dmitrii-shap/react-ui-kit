import styled from 'styled-components';
import { StyledCircularProgressProps } from '../models';
import { variantStaticMixin } from './mixins/variant-static.mixin';
import { variantDynamicMixin } from './mixins/variant-dynamic.mixin';
import { colorMixin } from './mixins/color.mixin';

export const StyledCircularProgress = styled.div<StyledCircularProgressProps>`
  svg {
    display: block;
    transform: rotate(-90deg);
  }
  
  ${({ progressValue }) => getVariantMixin(progressValue)}
  ${colorMixin}
`;

const getVariantMixin = (progressValue?: number) =>
    progressValue !== undefined ? variantDynamicMixin(progressValue) : variantStaticMixin;

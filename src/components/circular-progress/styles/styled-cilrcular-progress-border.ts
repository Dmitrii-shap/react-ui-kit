import styled from 'styled-components';
import { CircularProgressSize, StyledCircularProgressProps } from '../models';
import { sizeLargeMixin, sizeMediumMixin, sizeSmallMixin } from './mixins/sizes.mixin';
import { borderWidthLargeMixin, borderWidthMediumMixin, borderWidthSmallMixin } from './mixins/border-width.mixin';

export const StyledCircularProgressBorder = styled.div<StyledCircularProgressProps>`
  border-radius: 50%;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  box-sizing: border-box;

  ${({ size }) => getSizeMixin(size)}
  ${({ size }) => getBorderWidth(size)}
`;

const getSizeMixin = (size: CircularProgressSize) => {
    switch (size) {
        case 'small':
            return sizeSmallMixin;
        case 'medium':
            return sizeMediumMixin;
        case 'large':
            return sizeLargeMixin;
    }
}

const getBorderWidth = (size: CircularProgressSize) => {
    switch (size) {
        case 'small':
            return borderWidthSmallMixin;
        case 'medium':
            return borderWidthMediumMixin;
        case 'large':
            return borderWidthLargeMixin;
    }
}

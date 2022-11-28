import styled from 'styled-components';
import { CircularProgressSize, StyledCircularProgressProps } from '../models';
import { sizeLargeMixin, sizeMediumMixin, sizeSmallMixin } from './mixins/sizes.mixin';

export const StyledCircularProgressContainer = styled.div<StyledCircularProgressProps>`
    box-sizing: border-box;
    position: relative;

    ${({ size }) => getSizeMixin(size)}
`;

function getSizeMixin(size: CircularProgressSize) {
    switch (size) {
        case 'small':
            return sizeSmallMixin;
        case 'medium':
            return sizeMediumMixin;
        case 'large':
            return sizeLargeMixin;
    }
}

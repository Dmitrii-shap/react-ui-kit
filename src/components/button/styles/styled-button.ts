import styled from 'styled-components';
import { ButtonSize, ButtonVariant, StyledButtonProps } from '../models';
import { variantContainedMixin } from './mixins/variant-contained.mixin';
import { variantTextMixin } from './mixins/variant-text.mixin';
import { variantOutlinedMixin } from './mixins/variant-outlined.mixin';
import { sizeLargeMixin, sizeMediumMixin, sizeSmallMixin } from './mixins/sizes.mixin';
import { activeStateMixin, disabledStateMixin } from './mixins/states.mixin';

export const StyledButton = styled.button<StyledButtonProps>`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 1px;
    transition: all 150ms ease-in-out;
    line-height: normal;

    border-radius: ${({ theme }) => theme.shape.borderRadius.button}px;
    font-family: ${({ theme }) => theme.commonTypography.fontFamily};
    font-size: ${({ theme }) => theme.typography.button.fontWeight};
    font-weight: ${({ theme }) => theme.typography.button.fontSize}px;

    ${({ disabled }) => (disabled ? disabledStateMixin : activeStateMixin)};
    ${({ variant }) => getVariantMixin(variant)}
    ${({ size }) => getSizeMixin(size)}
`;

function getVariantMixin(variant: ButtonVariant) {
    switch (variant) {
        case 'contained':
            return variantContainedMixin;
        case 'outlined':
            return variantOutlinedMixin;
        case 'text':
            return variantTextMixin;
    }
}

function getSizeMixin(size: ButtonSize) {
    switch (size) {
        case 'medium':
            return sizeMediumMixin;
        case 'large':
            return sizeLargeMixin;
        case 'small':
            return sizeSmallMixin;
    }
}

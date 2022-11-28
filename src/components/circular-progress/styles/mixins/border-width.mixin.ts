import { css } from 'styled-components';
import { CircularProgressProps } from '../../models';
import { circleThickness } from '../../const';

const baseBorderWidth = (multiplier: number) => css<CircularProgressProps>`
    border: ${circleThickness * multiplier}px solid
        ${({ color, theme }) => (color === 'white' ? theme.palette.white : theme.palette.gray['600'])};
    opacity: ${({ color }) => (color === 'white' ? 0.48 : 'initial')};
`;

export const borderWidthSmallMixin = baseBorderWidth(0.5);
export const borderWidthMediumMixin = baseBorderWidth(1);
export const borderWidthLargeMixin = baseBorderWidth(2);

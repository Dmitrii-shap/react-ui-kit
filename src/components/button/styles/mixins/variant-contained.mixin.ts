import { css } from 'styled-components';
import { ButtonColors, StyledButtonProps } from '../../models';
import { colorMap } from '../../color.map';
import { PaletteKeys } from '../../../../types/theme';

export const variantContainedMixin = css<StyledButtonProps>`
    border: none;
    color: ${({ theme, color }) => theme.palette[getColor(color)]};
    fill: ${({ theme, color }) => theme.palette[getColor(color)]};
    background-color: ${({ theme, color }) => theme.palette[colorMap[color]]};

    &:hover {
        opacity: 0.8;
    }
`;

const getColor = (color: ButtonColors): PaletteKeys => {
    if (color === 'secondary') {
        return 'primary';
    }

    if (color === 'warning') {
        return 'black';
    }

    return 'white';
};

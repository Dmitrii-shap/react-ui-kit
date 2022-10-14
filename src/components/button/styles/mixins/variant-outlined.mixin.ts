import { css } from 'styled-components';
import chroma from 'chroma-js';
import { StyledButtonProps } from '../../models';
import { colorMap } from '../../color.map';

export const variantOutlinedMixin = css<StyledButtonProps>`
    border: 1px solid ${({ theme, color }) => theme.palette[colorMap[color]]};
    color: ${({ theme, color }) => theme.palette[colorMap[color]]};
    fill: ${({ theme, color }) => theme.palette[colorMap[color]]};
    background-color: transparent;
    box-shadow: none;

    &:hover {
        background-color: ${({ theme, color }) =>
            chroma(theme.palette[colorMap[color]]).alpha(0.1).hex()};
    }
`;

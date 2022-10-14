import { css } from 'styled-components';
import chroma from 'chroma-js';
import { StyledButtonProps } from '../../models';
import { colorMap } from '../../color.map';

export const variantTextMixin = css<StyledButtonProps>`
    border: none;
    color: ${({ theme, color }) => theme.palette[colorMap[color]]};
    fill: ${({ theme, color }) => theme.palette[colorMap[color]]};
    background-color: transparent;
    box-shadow: none;

    &:hover {
        color: ${({ theme, color }) =>
            chroma(theme.palette[colorMap[color]]).darken().hex()};
        fill: ${({ theme, color }) =>
              chroma(theme.palette[colorMap[color]]).darken().hex()};
    }
`;

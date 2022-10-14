import { css } from 'styled-components';
import { StyledButtonProps } from '../../models';
import { colorMap } from '../../color.map';

export const variantContainedMixin = css<StyledButtonProps>`
    border: none;
    color: ${({ theme, color }) =>
        color !== 'secondary' ? theme.palette.white : theme.palette.primary};
    fill: ${({ theme, color }) =>
          color !== 'secondary' ? theme.palette.white : theme.palette.primary};
    background-color: ${({ theme, color }) => theme.palette[colorMap[color]]};

    &:hover {
        opacity: 0.8;
    }
`;

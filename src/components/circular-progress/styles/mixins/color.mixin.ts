import { colorMap } from '../../color.map';
import { css } from 'styled-components';
import { StyledCircularProgressProps } from '../../models';

export const colorMixin = css<StyledCircularProgressProps>`
  circle {
    stroke: ${({ theme, color }) => theme.palette[colorMap[color]]};
  }
`;

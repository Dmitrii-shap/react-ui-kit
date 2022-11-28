import { Breakpoints } from './breakpoints';
import { Palette } from './palette';
import { Shadows } from './shadow';
import { Shape } from './shape';
import { CommonTypography, TypographyTheme } from './typography';

export type Theme = {
    palette: Palette;
    commonTypography: CommonTypography;
    typography: TypographyTheme;
    shape: Shape;
    shadow: Shadows;
    breakpoints: Breakpoints;
};

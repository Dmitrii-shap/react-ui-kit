import { CreateTheme } from '../types/theme';
import { createPalette, createTypography, createShape, createCommonTypography, createBreakpoints } from './creators';
import { createShadows } from './creators/create-shadows';

export const createTheme: CreateTheme = (options) => {
    const { palette, commonTypography, typography, shape, shadow, breakpoints,  ...rest } = options || {};

    return {
        palette: createPalette(palette),
        commonTypography: createCommonTypography(commonTypography),
        typography: createTypography(typography),
        shape: createShape(shape),
        shadow: createShadows(shadow),
        breakpoints: createBreakpoints(breakpoints),
        ...rest,
    };
};

import { Palette, CommonTypography, Shape, Shadows, TypographyTheme } from '../types/theme';
import { BreakpointValues } from '../types/theme/breakpoints';
import { defaultComponents } from './default-theme/typography/default-components';
import { defaultHeaders } from './default-theme/typography/default-headers';
import { defaultParagraphs } from './default-theme/typography/default-paragraphs';
import { defaultSubHeaders } from './default-theme/typography/default-sub-headers';

export const defaultPalette: Palette = {
    // Main
    primary: '#00a88e',
    primaryDark: '#265951',
    primaryLight: '#23d1ae',
    black: '#1d1d1b',
    white: '#ffffff',
    // Additional
    error: '#ff3748',
    errorDark: '#ed2939',
    warning: '#ffe810',
    warningDark: '#d5c30b',
    secondary: '#bde0f5',
    text: {
        primary: '#1d1d1b',
        secondary: '#666666',
        disabled: '#999999',
    },
    gray: {
        100: '#444444',
        200: '#666666',
        300: '#999999',
        400: '#aeaeae',
        500: '#cccccc',
        600: '#f2f2f2',
        700: '#f8f8f8',
    },
};

export const defaultCommonTypography: CommonTypography = {
    fontFamily: "'Roboto', Arial, sansSerif",
    fontWeightRegular: 400,
    fontWeightLight: 300,
    fontWeightBold: 700,
    fontSize: 14,
    htmlFontSize: 16,
    opacity: 0.72,
};

export const defaultTypography: TypographyTheme = {
    ...defaultHeaders,
    ...defaultSubHeaders,
    ...defaultParagraphs,
    ...defaultComponents,
};

export const defaultShape: Shape = {
    borderRadius: {
        button: 8,
    },
    baseSpacing: 4,
};

export const defaultShadows: Shadows = {
    card: {
        main: '0px 8px 24px rgba(38, 202, 153, 0.24)',
        hover: '0px 8px 32px rgba(52, 208, 184, 0.48)',
    },
    gray: {
        main: '0px 4px 20px rgba(92, 133, 150, 0.24)',
        hover: '0px 4px 20px rgba(92, 133, 150, 0.35)',
    },
    error: '0px 8px 24px rgba(252, 214, 199, 0.64)',
};

export const defaultBreakpointsValue: BreakpointValues = {
    xs: 640,
    sm: 1024,
    md: 1200,
};

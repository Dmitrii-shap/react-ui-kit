export interface PrimaryPalette {
    primary: string;
    primaryDark: string;
    primaryLight: string;
    black: string;
    white: string;
}

export interface AdditionalPalette {
    warning: string;
    warningDark: string;
    error: string;
    errorDark: string;
    secondary: string;
}

export interface TextPalette {
    primary: string;
    secondary: string;
    disabled: string;
}

interface GrayScale {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
}

export type PaletteKeys = keyof (PrimaryPalette & AdditionalPalette);
export interface Palette extends PrimaryPalette, AdditionalPalette {
    gray: GrayScale;
    text: TextPalette;
}

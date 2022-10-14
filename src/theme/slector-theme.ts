import { DefaultTheme } from 'styled-components';

type ThemeProp = { theme: DefaultTheme };

export const ThemeSelector = {
    spacing:
        (ratio: number) =>
        ({ theme }: ThemeProp): number =>
            theme.shape.baseSpacing * ratio,
};

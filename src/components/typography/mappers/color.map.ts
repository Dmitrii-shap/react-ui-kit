import { TypographyColor } from '../models';
import { AdditionalPalette, PrimaryPalette } from '../../../types/theme';

export const colorMap: Record<TypographyColor, keyof (AdditionalPalette & PrimaryPalette & 'primaryText' & 'textSecondary' & 'textDisabled')> = {
    contrast: 'white',
    error: 'errorDark',
    warning: 'warning',
    primary: 'primary',
    textPrimary: 'primaryText',
    textSecondary: 'textSecondary',
    textDisabled: 'textDisabled',
};

import { TypographyColor } from '../models';
import { AdditionalPalette, PrimaryPalette } from '../../../types/theme';

export const colorMap: Record<
    TypographyColor,
    keyof (AdditionalPalette & PrimaryPalette & 'textPrimary' & 'textSecondary' & 'textDisabled')
> = {
    contrast: 'white',
    error: 'errorDark',
    warning: 'warning',
    primary: 'primary',
    textPrimary: 'textPrimary',
    textSecondary: 'textSecondary',
    textDisabled: 'textDisabled',
};

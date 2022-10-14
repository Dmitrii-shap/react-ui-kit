import { AdditionalPalette, PrimaryPalette } from '../../types/theme';
import { ButtonColors } from './models';

export const colorMap: Record<
    ButtonColors,
    keyof (PrimaryPalette & AdditionalPalette)
> = {
    primary: 'primary',
    'primary-contrast': 'black',
    error: 'error',
    secondary: 'white',
};

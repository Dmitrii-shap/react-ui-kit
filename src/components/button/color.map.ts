import { PaletteKeys } from '../../types/theme';
import { ButtonColors } from './models';

export const colorMap: Record<
    ButtonColors,
    PaletteKeys
> = {
    primary: 'primary',
    'primary-contrast': 'black',
    error: 'error',
    secondary: 'white',
    warning: 'warning'
};

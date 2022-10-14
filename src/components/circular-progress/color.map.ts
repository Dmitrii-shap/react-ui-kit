import { AdditionalPalette, PrimaryPalette } from '../../types/theme';
import { CircularProgressColors } from './models';

export const colorMap: Record<
    CircularProgressColors,
    keyof (PrimaryPalette & AdditionalPalette)
    > = {
    primary: 'primary',
    white: 'white',
    error: 'error',
};

import { ComponentsTypography } from '../../../types/theme';
import { createTypographyElement } from './create-typography-element';

export const defaultComponents: ComponentsTypography = {
    button: createTypographyElement({
        fontSize: 14,
        fontWeight: 700,
    }),
};

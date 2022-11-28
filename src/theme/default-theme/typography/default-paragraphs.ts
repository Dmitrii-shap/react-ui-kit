import { ParagraphsTypography } from '../../../types/theme';
import { createTypographyElement } from './create-typography-element';

export const defaultParagraphs: ParagraphsTypography = {
    p1: createTypographyElement({
        fontSize: 21,
        fontWeight: 300,
        lineHeight: 24,
    }),
    p2: createTypographyElement({
        fontSize: 18,
        fontWeight: 300,
    }),
    p3: createTypographyElement({
        fontSize: 16,
        fontWeight: 300,
    }),
    p4: createTypographyElement({
        fontSize: 14,
        fontWeight: 300,
    }),
    p5: createTypographyElement({
        fontSize: 12,
        fontWeight: 300,
    }),
    p6: createTypographyElement({
        fontSize: 10,
        fontWeight: 300,
        lineHeight: 12,
    }),
};

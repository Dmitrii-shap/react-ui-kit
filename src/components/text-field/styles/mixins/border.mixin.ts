import { css } from 'styled-components';
import { TextFieldProps, TextFieldVariant } from '../../models';

const defaultBorderWidth = 2;

export const border = css<TextFieldProps>`
    border-style: solid;
    ${({ variant }) => getBorderStyle(variant)}
`;

const borderUnderline = css<TextFieldProps>`
    border-bottom-width: ${defaultBorderWidth}px;
`;

const borderFull = css<TextFieldProps>`
    border-width: ${defaultBorderWidth}px;
`;

const getBorderStyle = (variant: TextFieldVariant) => {
    switch (variant) {
        case 'border':
            return borderFull;
        case 'underline':
            return borderUnderline;
    }
};

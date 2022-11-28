import { css } from 'styled-components';
import { TextFieldProps, TextFieldVariant } from '../../models';

const errorBorderColorFull = css<TextFieldProps>`
    border-color: ${({ theme }) => theme.palette.error};
`;
const errorBorderColorUnderline = css<TextFieldProps>`
    border-bottom-color: ${({ theme }) => theme.palette.error};
`;

const borderColorFull = css<TextFieldProps>`
    border-color: ${({ theme }) => theme.palette.gray['500']};

    &:hover {
        border-color: ${({ theme }) => theme.palette.secondary};
    }

    &:focus,
    &:active {
        border-bottom-color: ${({ theme }) => theme.palette.primaryLight};
    }
`;

const borderColorUnderline = css<TextFieldProps>`
    border-bottom-color: ${({ theme }) => theme.palette.gray['500']};

    &:hover {
        border-bottom-color: ${({ theme }) => theme.palette.secondary};
    }

    &:focus,
    &:active {
        border-bottom-color: ${({ theme }) => theme.palette.primaryLight};
    }
`;

const getBorderColor = (variant: TextFieldVariant, isError: boolean) => {
    switch (variant) {
        case 'border':
            return isError ? errorBorderColorFull : borderColorFull;
        case 'underline':
            return isError ? errorBorderColorUnderline : borderColorUnderline;
    }
};

export const borderColor = css<TextFieldProps>`
    border-color: transparent;
    ${({ error, variant }) => getBorderColor(variant, !!error)}
`;

import { css } from 'styled-components';
import { TextFieldProps } from '../../models';

export const shadow = css<TextFieldProps>`
    box-shadow: ${({ theme, error }) => (error ? theme.shadow.error : theme.shadow.card.main)};

    &:hover,
    &:focus {
        box-shadow: ${({ theme }) => theme.shadow.card.hover};
    }
`;

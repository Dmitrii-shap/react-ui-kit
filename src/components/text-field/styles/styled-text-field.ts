import styled from 'styled-components';
import { TextFieldProps } from '../models';
import { borderColor } from './mixins/border-color.mixin';
import { border } from './mixins/border.mixin';
import { padding } from './mixins/padding.mixin';
import { shadow } from './mixins/shadow.mixin';

export const StyledTextField = styled.input<TextFieldProps>`
    font-family: ${({ theme }) => theme.commonTypography.fontFamily};
    box-sizing: border-box;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;

    outline: none;
    ${({ fullWidth }) => fullWidth && 'width: 100%'};
    color: ${({ theme }) => theme.palette.text.primary};
    background: ${({ theme }) => theme.palette.white};
    border-radius: 0;

    &:active {
        border-radius: 0;
        outline: none;
    }

    &::placeholder {
        color: ${({ theme }) => theme.palette.text.secondary};
        font-size: 16px;
        line-height: 20px;
    }

    ${padding};
    ${borderColor};
    ${border};
    ${({ withShadow }) => withShadow && shadow}
`;

import styled, { css } from 'styled-components';
import { StyledTextFieldLabelProps } from '../models';
import { labelPadding } from './mixins/padding.mixin';

const shrinkCss = css`
    font-size: 12px;
    line-height: 16px;
    margin-top: 0;
`;

export const StyledTextFieldLabel = styled.label<StyledTextFieldLabelProps>`
    display: block;
    position: absolute;
    top: 4px;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.palette.text.secondary};
    pointer-events: none;
    margin-top: 8px;
    transition: 0.2s;
    ${labelPadding}

    input + &:focus {
        ${shrinkCss};
    }
    ${({ shrink }) => shrink && shrinkCss};
`;

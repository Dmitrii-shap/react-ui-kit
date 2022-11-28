import styled, { css } from 'styled-components';
import { StyledCheckboxProps } from '../models';
import { StyledCheckboxInput } from './styled-checkbox-input';

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
    width: 20px;
    height: 20px;
    border: 2px solid ${({ theme }) => theme.palette.gray['500']};
    background-color: ${({ theme }) => theme.palette.white};
    border-radius: 3px;
    display: inline-block;
    position: relative;

    ${StyledCheckboxInput}:hover ~ & {
        background-color: ${({ theme }) => theme.palette.gray['700']};
    }

    ${StyledCheckboxInput}:disabled ~ & {
        background-color: ${({ theme }) => theme.palette.gray['700']};
        border-color: ${({ theme }) => theme.palette.gray['600']};
    }

    ${StyledCheckboxInput}:checked:disabled ~ & {
        opacity: 0.6;
    }

    ${StyledCheckboxInput}:checked ~ & {
        &:after {
            position: absolute;
            content: '';
            left: 6px;
            top: 2px;
            width: 5px;
            height: 10px;
            border: solid ${({ theme }) => theme.palette.white};
            border-width: 0 3px 3px 0;
            transform: rotate(45deg);
        }
    }

    ${({ isError }) => (isError ? errorCheckbox : primaryCheckbox)}
`;

const primaryCheckbox = css`
    ${StyledCheckboxInput}:checked:enabled:hover ~ & {
        background-color: ${({ theme }) => theme.palette.primaryLight};
        border-color: ${({ theme }) => theme.palette.primaryLight};
    }

    ${StyledCheckboxInput}:checked ~ & {
        background-color: ${({ theme }) => theme.palette.primary};
        border-color: ${({ theme }) => theme.palette.primary};
    }
`;

const errorCheckbox = css`
    border-color: ${({ theme }) => theme.palette.error};

    ${StyledCheckboxInput}:checked:enabled:hover ~ & {
        background-color: ${({ theme }) => theme.palette.errorDark};
        border-color: ${({ theme }) => theme.palette.errorDark};
    }

    ${StyledCheckboxInput}:checked ~ & {
        background-color: ${({ theme }) => theme.palette.error};
        border-color: ${({ theme }) => theme.palette.error};
    }
`;

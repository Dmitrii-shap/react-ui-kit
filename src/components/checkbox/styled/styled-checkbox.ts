import styled, { css } from 'styled-components';
import { StyledCheckboxProps } from '../models';

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.palette.gray['500']};
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 3px;
  display: inline-block;
  position: relative;
  
  input:hover ~ & {
    background-color: ${({ theme }) => theme.palette.gray['700']};
  }

  input:disabled ~ & {
    background-color: ${({ theme }) => theme.palette.gray['700']};
    border-color: ${({ theme }) => theme.palette.gray['600']};
  }

  input:checked:disabled ~ & {
    opacity: 0.6;
  }

  input:checked ~ & {
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
    
  ${({ error }) => error ? errorCheckbox : primaryCheckbox}
`;

const primaryCheckbox = css`
  input:checked:enabled:hover ~ & {
    background-color: ${({ theme }) => theme.palette.primaryLight};
    border-color: ${({ theme }) => theme.palette.primaryLight};
  }

  input:checked ~ & {
    background-color: ${({ theme }) => theme.palette.primary};
    border-color: ${({ theme }) => theme.palette.primary};
  }
`

const errorCheckbox = css`
  border-color: ${({ theme }) => theme.palette.error};

  input:checked:enabled:hover ~ & {
    background-color: ${({ theme }) => theme.palette.errorDark};
    border-color: ${({ theme }) => theme.palette.errorDark};
  }

  input:checked ~ & {
    background-color: ${({ theme }) => theme.palette.error};
    border-color: ${({ theme }) => theme.palette.error};
  }
`;

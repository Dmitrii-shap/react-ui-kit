import { InputHTMLAttributes, ReactNode } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>, StyledCheckboxProps {
    label?: ReactNode;
}

export interface StyledCheckboxProps {
    isError?: boolean;
}

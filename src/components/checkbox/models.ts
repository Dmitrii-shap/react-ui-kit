import { InputHTMLAttributes, ReactNode } from 'react';

export type CheckboxColor = 'primary' | 'warning' | 'error';
export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    // onChange: (value: boolean) => void;
    color: CheckboxColor;
    label?: ReactNode;
    error?: boolean;
}

export interface StyledCheckboxProps {
    checked: boolean;
    color: CheckboxColor;
}

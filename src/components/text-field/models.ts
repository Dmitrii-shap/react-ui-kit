import { InputHTMLAttributes } from "react";

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  message?: string;
  fullWidth?: boolean;
  label?: string;
  type: 'text' | 'number';
  variant: TextFieldVariant;
  withShadow?: boolean;
};

export type TextFieldVariant = 'border' | 'underline';

export type StyledTextFieldLabelProps = {
  shrink: boolean;
  variant: TextFieldVariant;
  withShadow?: boolean;
}

import React, { FC, useState } from 'react';
import { Typography } from '../typography/Typography';
import { TextFieldProps } from './models';
import { StyledTextField, StyledTextFieldLabel, StyledTextFieldContainer } from './styles';

export const TextField: FC<TextFieldProps> = (props) => {
    const {
        type = 'text',
        label,
        error,
        placeholder,
        message,
        value,
        defaultValue,
        onBlur,
        onFocus,
        onChange,
        variant,
        withShadow,
    } = props;

    const [focusedState, setFocused] = useState(false);
    const [hasValue, changeHasValue] = useState(!!value || !!defaultValue);

    return (
        <StyledTextFieldContainer>
            {label && (
                <StyledTextFieldLabel shrink={focusedState || hasValue} variant={variant} withShadow={withShadow}>
                    {label}
                </StyledTextFieldLabel>
            )}
            <StyledTextField
                {...props}
                type={type}
                placeholder={label ? '' : placeholder}
                onChange={(e) => {
                    changeHasValue(!!e.currentTarget.value);
                    onChange && onChange(e);
                }}
                onBlur={(e) => {
                    setFocused(false);
                    onBlur && onBlur(e);
                }}
                onFocus={(e) => {
                    setFocused(true);
                    onFocus && onFocus(e);
                }}
            />
            {message && (
                <Typography variant="p6" color={error ? 'error' : 'textPrimary'}>
                    {message}
                </Typography>
            )}
        </StyledTextFieldContainer>
    );
};

import React, { FC } from "react";
import styled from "styled-components";
import { Typography } from "../typography/Typography";
import { TextFieldProps } from "./models";
import { StyledTextField } from "./styles/styled-text-field";
import { StyledTextFieldLabel } from "./styles/styled-text-field-label";

const TextFieldContainer = styled.div`
  position: relative;
`

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
    onChange
  } = props;

  const [focusedState, setFocused] = React.useState(false);
  const [valueState, setValue] = React.useState<typeof value>(defaultValue || value);

  return (
    <TextFieldContainer>
      {label && <StyledTextFieldLabel shrink={focusedState || !!valueState} variant={props.variant}
                                      withShadow={props.withShadow}>{label}</StyledTextFieldLabel>}
      <StyledTextField {...props} type={type} placeholder={!label ? placeholder : ''}
                       onChange={(e) => {
                         setValue(e.currentTarget.value);
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
      {message && <Typography variant='p6' color={error ? 'error' : 'textPrimary'}>{message}</Typography>}
    </TextFieldContainer>
  )
}

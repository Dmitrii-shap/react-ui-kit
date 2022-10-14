import { css } from "styled-components";
import { StyledTextFieldLabelProps, TextFieldProps } from "../../models";

export const padding = css<TextFieldProps>`
  padding: ${({variant, withShadow}) => variant !== 'underline' || withShadow ? '10px' : '10px 10px 10px 0'};
  ${({label}) => label && `padding-top: 16px; padding-bottom: 4px`};
`;

export const labelPadding = css<StyledTextFieldLabelProps>`
  left: ${({variant, withShadow}) => variant !== 'underline' || withShadow ? '12px': 0};
`

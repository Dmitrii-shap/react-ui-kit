import styled from "styled-components";
import { Palette } from "../../../types/theme";
import { IconColors, StyledProps } from "../models";


export const StyledIcon = styled.span<StyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: ${({theme, color}) =>  getIconFill(color, theme.palette)};
`
const getIconFill = (color: IconColors, palette: Palette) => {
  switch (color){
    case 'primary':
      return palette.primary;
    case 'warning':
      return palette.warning;
    case 'error':
      return palette.error;
    case 'black':
      return palette.black;
    case 'white':
      return palette.white;
    case 'gray':
      return palette.gray["400"];
    case 'blue':
      return palette.secondary;
    default:
      'inherit';
  }
}

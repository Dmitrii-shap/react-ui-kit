import { TypographyTypes } from "../../types/theme";
import { Property } from "csstype";

export interface TypographyProps {
  variant: TypographyTypes;
  fontWeight?: TypographyFontWeight;
  isInline?: boolean;
  color?: TypographyColor;
  align?: Property.TextAlign;
  fontStyle?: "italic" | "normal" | "oblique";
  textTransform?: Property.TextTransform;
  isOpacity?: boolean;
}

export type StyledTypographyProps = TypographyProps;

export type TypographyFontWeight = 'bold' | 'regular' | 'light' | 'thin';
export type TypographyColor = 'primary' | 'contrast' | 'error' | 'warning' | 'textPrimary' | 'textSecondary' | 'textDisabled';

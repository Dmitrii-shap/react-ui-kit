import { TypographyTypes } from "../../../types/theme";

const map: Optional<Record<TypographyTypes, keyof HTMLElementTagNameMap>, TypographyTypes> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  button: 'span'
}

export const htmlElementMap = (variant: TypographyTypes): keyof HTMLElementTagNameMap => map[variant] || 'p';

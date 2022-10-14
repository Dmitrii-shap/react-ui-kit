import styled from 'styled-components';
import { Palette } from '../../../types/theme';
import { colorMap } from '../mappers/color.map';
import { fontWeightMap } from '../mappers/font-weight.map';
import { StyledTypographyProps, TypographyColor } from '../models';

export const StyledTypography = styled.div<StyledTypographyProps>`
  font-family: ${({ theme }) => theme.commonTypography.fontFamily};
  font-size: ${({ theme, variant }) => theme.typography[variant].fontSize}px;
  line-height: ${({ theme, variant }) => theme.typography[variant].lineHeight}px;
  font-weight: ${({ theme, variant, fontWeight }) => fontWeight ? fontWeightMap[fontWeight] : theme.typography[variant].fontWeight};
  ${({ fontStyle }) => fontStyle && `font-style: ${fontStyle}`};
  letter-spacing: ${({ theme, variant }) => theme.typography[variant].letterSpacing || 'inherit'};
  text-transform: ${({ theme, variant, textTransform}) => textTransform || theme.typography[variant].textTransform || 'none'};
  color: ${({ theme, variant, color }) => color ? getPaletteColor(theme.palette, color) : (theme.typography[variant].color || theme.palette.text.primary)};
  ${({ theme, isOpacity }) => isOpacity && `opacity: ${theme.commonTypography.opacity}`};
  display: ${({ isInline }) => isInline ? 'inline-block' : 'inherit'};
  text-align: ${({ align }) => align || 'left'};
  margin: 0;
`;

const getPaletteColor = (palette: Palette, color: TypographyColor): string => {
  switch (color) {
    case 'textPrimary':
      return palette.text.primary;
    case 'textSecondary':
      return palette.text.secondary;
    case 'textDisabled':
      return palette.text.disabled;
    default:
      return palette[colorMap[color] as keyof Palette] as string;
  }
};

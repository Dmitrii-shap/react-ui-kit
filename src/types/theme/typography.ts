import { Property } from 'csstype';

export interface CommonTypography {
    fontFamily: string;
    fontWeightRegular: number;
    fontWeightLight: number;
    fontWeightBold: number;
    fontSize: number;
    htmlFontSize: number;
    opacity: number;
}

export type TypographyTheme = HeadingsTypography & SubHeadingsTypography & ParagraphsTypography & ComponentsTypography;
export type TypographyTypes =
    | HeadingsTypographyTypes
    | SubHeadingsTypographyTypes
    | ParagraphsTypographyTypes
    | ComponentsTypographyTypes;

export type HeadingsTypographyTypes = 'h1' | 'h2' | 'h3';
export type HeadingsTypography = Record<HeadingsTypographyTypes, TypographyConfig>;

export type SubHeadingsTypographyTypes = 'h4' | 'h5' | 'h6';
export type SubHeadingsTypography = Record<SubHeadingsTypographyTypes, TypographyConfig>;

export type ParagraphsTypographyTypes = 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6';
export type ParagraphsTypography = Record<ParagraphsTypographyTypes, TypographyConfig>;

export type ComponentsTypographyTypes = 'button';
export type ComponentsTypography = Record<ComponentsTypographyTypes, TypographyConfig>;

export interface TypographyConfig {
    fontSize: number;
    letterSpacing?: number;
    lineHeight?: Property.LineHeight;
    fontWeight?: Property.FontWeight;
    textTransform?: Property.TextTransform;
    color?: Property.Color;
}

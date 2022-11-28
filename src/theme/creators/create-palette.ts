import defaultsDeep from 'lodash.defaultsdeep';
import { defaultPalette } from '../defaults-theme';
import { DefaultTheme } from 'styled-components';

export const createPalette = (palette: RecursiveOptional<DefaultTheme['palette']> = {}): DefaultTheme['palette'] =>
    defaultsDeep(palette, defaultPalette);

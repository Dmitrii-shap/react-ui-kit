import defaultsDeep from 'lodash.defaultsdeep';
import { defaultPalette } from '../defaults-theme';
import { DefaultTheme } from 'styled-components';
import { RecursiveOptional } from '../../types/utilityTypes';

export const createPalette = (palette: RecursiveOptional<DefaultTheme['palette']> = {}): DefaultTheme['palette'] =>
    defaultsDeep(palette, defaultPalette);

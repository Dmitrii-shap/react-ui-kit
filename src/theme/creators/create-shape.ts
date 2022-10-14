import defaultsDeep from 'lodash.defaultsdeep';
import { defaultShape } from '../defaults-theme';
import { DefaultTheme } from 'styled-components';

export const createShape = (
    shape: RecursiveOptional<DefaultTheme['shape']> = {}
): DefaultTheme['shape'] => defaultsDeep(shape, defaultShape);

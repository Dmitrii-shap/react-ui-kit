import defaultsDeep from 'lodash.defaultsdeep';
import { defaultShape } from '../defaults-theme';
import { DefaultTheme } from 'styled-components';
import { RecursiveOptional } from '../../types/utilityTypes';

export const createShape = (shape: RecursiveOptional<DefaultTheme['shape']> = {}): DefaultTheme['shape'] =>
    defaultsDeep(shape, defaultShape);

import { DefaultTheme } from 'styled-components';
import defaultsDeep from 'lodash.defaultsdeep';
import { defaultShadows } from '../defaults-theme';
import { RecursiveOptional } from '../../types/utilityTypes';

export const createShadows = (shadows?: RecursiveOptional<DefaultTheme['shadow']>): DefaultTheme['shadow'] =>
    defaultsDeep(shadows, defaultShadows);

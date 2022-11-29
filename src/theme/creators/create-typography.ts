import defaultsDeep from 'lodash.defaultsdeep';
import { defaultCommonTypography, defaultTypography } from '../defaults-theme';
import { DefaultTheme } from 'styled-components';
import { RecursiveOptional } from '../../types/utilityTypes';

export const createCommonTypography = (
    typography: RecursiveOptional<DefaultTheme['commonTypography']> = {}
): DefaultTheme['commonTypography'] => defaultsDeep(typography, defaultCommonTypography);

export const createTypography = (
    typography: RecursiveOptional<DefaultTheme['typography']> = {}
): DefaultTheme['typography'] => defaultsDeep(typography, defaultTypography);

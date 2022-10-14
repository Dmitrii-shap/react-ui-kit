import { DefaultTheme } from 'styled-components';
import defaultsDeep from 'lodash.defaultsdeep';
import { defaultShadows } from '../defaults-theme';

export const createShadows = (
    shadows?: RecursiveOptional<DefaultTheme['shadow']>
): DefaultTheme['shadow'] => defaultsDeep(shadows, defaultShadows);

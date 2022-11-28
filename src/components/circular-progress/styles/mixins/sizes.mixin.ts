import { css } from 'styled-components';
import { ThemeSelector } from '../../../../theme';

const { spacing } = ThemeSelector;

const ratio = 10;

const baseSizeMixin = (divider: number) => css`
    width: ${spacing(ratio / divider)}px;
    height: ${spacing(ratio / divider)}px;
`;

export const sizeSmallMixin = baseSizeMixin(2);
export const sizeMediumMixin = baseSizeMixin(1);
export const sizeLargeMixin = baseSizeMixin(0.5);

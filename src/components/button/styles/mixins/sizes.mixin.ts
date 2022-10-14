import { css } from 'styled-components';
import { ThemeSelector } from '../../../../theme';

const { spacing } = ThemeSelector;

const ratioVertical = 1;
const ratioHorizontal = ratioVertical * 2;

export const sizeMediumMixin = css`
    padding: ${spacing(ratioVertical * 2)}px ${spacing(ratioHorizontal * 2)}px;
`;

export const sizeLargeMixin = css`
    padding: ${spacing(ratioVertical * 4)}px ${spacing(ratioHorizontal * 4)}px;
`;

export const sizeSmallMixin = css`
    padding: ${spacing(ratioVertical)}px ${spacing(ratioHorizontal)}px;
`;

import styled from 'styled-components';
import { AlertTypes, StyledAlertCloseProps } from '../models';
import { PaletteKeys } from '../../../types/theme';
import { ThemeSelector } from '../../../theme';

const { spacing } = ThemeSelector;

export const StyledAlertClose = styled.div<StyledAlertCloseProps>`
    position: absolute;
    cursor: pointer;
    z-index: 1001;
    background: transparent;
    width: 16px;
    height: 16px;
    padding: 0;

    top: ${spacing(2)}px;
    right: ${spacing(2)}px;
    fill: ${({ theme, color }) => theme.palette[fillMapper[color]]};
`;

const fillMapper: Record<AlertTypes, PaletteKeys> = {
    info: 'black',
    warning: 'black',
    success: 'white',
    error: 'white',
};

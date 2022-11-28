import styled from 'styled-components';
import { StyledAlertProps, AlertTypes } from '../models';
import { PaletteKeys } from '../../../types/theme';
import { ThemeSelector } from '../../../theme';
import { motion } from 'framer-motion';

const { spacing } = ThemeSelector;

export const StyledAlert = styled(motion.div)<StyledAlertProps>`
    position: relative;
    padding: ${spacing(4)}px ${spacing(8)}px;
    background: ${({ theme, color }) => theme.palette[colorBgMap[color]]};
    color: ${({ theme, color }) => theme.palette[colorMap[color]]};
    box-shadow: 0 4px 20px rgba(92, 133, 150, 0.24);
    border-radius: 8px;
    min-width: 220px;

    font-size: 12px;
    font-weight: 300;
    line-height: 16px;

    & + & {
        margin-top: 12px;
    }
`;

const colorMap: Record<AlertTypes, PaletteKeys> = {
    info: 'black',
    success: 'white',
    error: 'white',
    warning: 'black',
};

const colorBgMap: Record<AlertTypes, PaletteKeys> = {
    info: 'white',
    success: 'primary',
    error: 'error',
    warning: 'warning',
};

import styled from 'styled-components';
import { ThemeSelector } from '../../../../theme';
import { defaultPaddingRatio, defaultPaddingRatioXs } from '../constants/default-padding-ratio';
import chroma from 'chroma-js';

const { spacing } = ThemeSelector;

export const StyledModalBody = styled.div`
    padding: ${spacing(defaultPaddingRatio)}px;
    overflow: auto;

    ${({ theme }) => theme.breakpoints.down('xs')} {
        padding: ${spacing(defaultPaddingRatioXs)}px;
    }

    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px ${({ theme }) => chroma(theme.palette.primaryDark).alpha(0.3).css()};
        border-radius: 10px;
        background-color: transparent;
    }

    &::-webkit-scrollbar {
        width: 8px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px ${({ theme }) => chroma(theme.palette.primaryDark).alpha(0.3).css()};
        background-color: ${({ theme }) => theme.palette.primary};
    }
`;

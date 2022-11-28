import styled from 'styled-components';
import { ThemeSelector } from '../../../theme';

const { spacing } = ThemeSelector;

export const StyledAccordionItemBodyContent = styled.div`
    padding: ${spacing(4)}px ${spacing(6)}px;
`;

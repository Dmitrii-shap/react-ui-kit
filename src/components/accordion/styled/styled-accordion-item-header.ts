import styled from 'styled-components';
import { ThemeSelector } from '../../../theme';

const { spacing } = ThemeSelector;

export const StyledAccordionItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing(3)}px ${spacing(6)}px;
  cursor: pointer;    
`

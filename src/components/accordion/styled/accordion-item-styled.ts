import styled from 'styled-components';
import { AccordionItemStyledProps } from '../models';
import { AccordionItemHeaderIconStyled } from './accordion-item-header-icon-styled';

export const AccordionItemStyled = styled.div<AccordionItemStyledProps>`
  ${AccordionItemHeaderIconStyled} {
    ${({isOpen}) => isOpen && 'transform: rotate(180deg)'};
  }
  
  background-color: ${({theme, isOdd}) => isOdd ? theme.palette.gray[700] : theme.palette.white};
`

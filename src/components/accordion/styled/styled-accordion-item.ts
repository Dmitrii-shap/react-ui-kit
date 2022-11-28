import styled from 'styled-components';
import { AccordionItemStyledProps } from '../models';
import { StyledAccordionItemHeaderIcon } from './styled-accordion-item-header-icon';

export const StyledAccordionItem = styled.div<AccordionItemStyledProps>`
    ${StyledAccordionItemHeaderIcon} {
        ${({ isOpen }) => isOpen && 'transform: rotate(180deg)'};
    }

    background-color: ${({ theme, isOdd }) => (isOdd ? theme.palette.gray[700] : theme.palette.white)};
`;

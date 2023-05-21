import styled from 'styled-components';
import { AccordionItemStyledProps } from '../models';
import { StyledAccordionItemHeaderIcon } from './styled-accordion-item-header-icon';

export const StyledAccordionItem = styled.div<AccordionItemStyledProps>`
    ${StyledAccordionItemHeaderIcon} {
        ${({ isOpen }) => isOpen && 'transform: rotate(180deg)'};
    }

    background-color: ${({ theme }) => theme.palette.gray[700]};

    &:nth-of-type(2n) {
        background-color: ${({ theme }) => theme.palette.white};
    }
`;

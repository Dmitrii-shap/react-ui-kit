import { ReactNode } from 'react';

export interface AccordionProps {
    multiple?: boolean;
    items: AccordionItem[];
}

export interface AccordionItem {
    title: string;
    children?: ReactNode;
}

export interface AccordionItemProps extends AccordionItem, AccordionItemStyledProps {
    onToggle: () => void;
}

export interface AccordionItemStyledProps {
    isOpen: boolean;
    isOdd: boolean;
}

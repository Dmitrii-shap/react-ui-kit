import React, { FC, useRef, useState } from 'react';
import { AccordionItemProps, AccordionProps } from './models';
import {
    StyledAccordionItem,
    StyledAccordionItemHeader,
    StyledAccordionItemTitle,
    StyledAccordionItemBody,
    StyledAccordionItemBodyContent,
    StyledAccordionItemHeaderIcon,
} from './styled';

const AccordionItem: FC<AccordionItemProps> = ({ title, children, isOpen, onToggle }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <StyledAccordionItem isOpen={isOpen}>
            <StyledAccordionItemHeader onClick={onToggle}>
                <StyledAccordionItemTitle>{title}</StyledAccordionItemTitle>
                <StyledAccordionItemHeaderIcon fill="black" height={12} width={12} />
            </StyledAccordionItemHeader>

            <StyledAccordionItemBody style={{ maxHeight: !isOpen ? 0 : contentRef.current?.offsetHeight }}>
                <StyledAccordionItemBodyContent ref={contentRef}>{children}</StyledAccordionItemBodyContent>
            </StyledAccordionItemBody>
        </StyledAccordionItem>
    );
};

const Accordion: FC<AccordionProps> = ({ items, multiple }) => {
    const [activeItems, setActiveItems] = useState<Set<number>>(new Set());

    const toggleElement = (num: number) => {
        if (activeItems.has(num)) {
            const newActiveItems = new Set(activeItems.values());
            newActiveItems.delete(num);
            setActiveItems(newActiveItems);
            return;
        }

        if (multiple) {
            const newActiveItems = new Set(activeItems.values());
            newActiveItems.add(num);
            setActiveItems(newActiveItems);
            return;
        }

        setActiveItems(new Set([num]));
    };

    return (
        <div>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    {...item}
                    isOpen={activeItems.has(index)}
                    onToggle={() => toggleElement(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;

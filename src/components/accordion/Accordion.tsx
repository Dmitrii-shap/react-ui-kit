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

const AccordionItem: FC<AccordionItemProps> = ({ title, children, isOpen, onToggle, isOdd }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <StyledAccordionItem isOpen={isOpen} isOdd={isOdd}>
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
    const [activeItems, setActiveItems] = useState<number[]>([]);

    const toggleElement = (num: number) => {
        const index = activeItems.indexOf(num);

        if (~index) {
            setActiveItems([...activeItems.slice(0, index), ...activeItems.slice(index + 1)]);
            return;
        }

        setActiveItems(multiple ? [...activeItems, num] : [num]);
    };

    return (
        <div>
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    {...item}
                    isOdd={!(index % 2)}
                    isOpen={activeItems.indexOf(index) > -1}
                    onToggle={() => toggleElement(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;

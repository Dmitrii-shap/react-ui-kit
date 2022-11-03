import React, { FC, useRef, useState } from 'react';
import { AccordionItemProps, AccordionProps } from './models';
import {
    AccordionItemStyled,
    AccordionItemHeaderStyled,
    AccordionItemTitleStyled,
    AccordionItemBodyStyled,
    AccordionItemBodyContentStyled,
    AccordionItemHeaderIconStyled,
} from './styled';

const Accordion: FC<AccordionItemProps> = ({ title, children, isOpen, onToggle, isOdd }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <AccordionItemStyled isOpen={isOpen} isOdd={isOdd}>
            <AccordionItemHeaderStyled onClick={onToggle}>
                <AccordionItemTitleStyled>{title}</AccordionItemTitleStyled>
                <AccordionItemHeaderIconStyled fill="black" height={12} width={12} />
            </AccordionItemHeaderStyled>

            <AccordionItemBodyStyled style={{ maxHeight: !isOpen ? 0 : contentRef.current?.offsetHeight }}>
                <AccordionItemBodyContentStyled ref={contentRef}>
                    {children}
                </AccordionItemBodyContentStyled>
            </AccordionItemBodyStyled>
        </AccordionItemStyled>
    );
};

const Accordions: FC<AccordionProps> = ({ items, multiple }) => {
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
                <Accordion
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

export default Accordions;

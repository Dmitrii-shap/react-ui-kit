import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from './Accordion';

export default {
    title: 'Components/Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const AccordionStory = Template.bind({});
AccordionStory.args = {
    multiple: false,
    items: new Array(5).fill(1).map((_, index) => ({ title: `title${index}`, children: `content${index}` })),
};

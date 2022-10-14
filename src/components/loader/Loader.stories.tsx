import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loader } from './Loader';
import React from 'react';

export default {
    title: 'Components/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Static = Template.bind({});
Static.args = {
    size: 'medium',
    variant: 'static',
};

export const Fixed = Template.bind({});
Fixed.args = {
    size: 'large',
    variant: 'fixed',
};

export const WithDimensions = Template.bind({});
WithDimensions.args = {
    size: 'large',
    variant: 'static',
    width: 300,
    height: 300,
};

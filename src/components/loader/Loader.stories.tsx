import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Loader } from './Loader';
import React from 'react';

export default {
    title: 'Components/Loader',
    component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Example = Template.bind({});
Example.args = {
    size: 'medium',
    variant: 'static',
};

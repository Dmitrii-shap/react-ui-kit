import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CircularProgress } from './CircularProgress';

export default {
    title: 'Components/CircularProgress',
    component: CircularProgress,
} as ComponentMeta<typeof CircularProgress>;

const Template: ComponentStory<typeof CircularProgress> = (args) => <CircularProgress {...args} />;

export const Static = Template.bind({});
Static.args = {
    color: 'primary',
    progressValue: undefined,
    size: 'medium'
};

export const Dynamic = Template.bind({});
Dynamic.args = {
    color: 'primary',
    progressValue: 50,
    size: 'large'
};

export const StaticError = Template.bind({});
StaticError.args = {
    color: 'error',
    size: 'large'
};


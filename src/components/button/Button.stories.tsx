import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: { controls: { sort: 'requiredFirst' } },
    controls: { hideNoControlsWarning: true },
    argTypes: {
        variant: {
            table: { disable: true },
        },
        as: {
            table: { disable: true },
        },
        href: {
            table: { disable: true },
        },
        target: {
            table: { disable: true },
        },
        to: {
            table: { disable: true },
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
    variant: 'contained',
    children: 'Contained button',
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
    children: 'Outlined button',
};

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
    children: 'Text button',
};

export const AsLink = Template.bind({});
Text.args = {
    as: 'a',
    variant: 'text',
    children: 'this is link',
    href: 'https://github.com/Dimazzz/react-ui-kit',
    target: '_black',
};

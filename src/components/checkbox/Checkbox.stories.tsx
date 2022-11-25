import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: { controls: { sort: 'requiredFirst' } },
    controls: { hideNoControlsWarning: true },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const CheckboxStory = Template.bind({});
CheckboxStory.args = {
    label: 'Label text',
    isError: false,
    disabled: false,
}

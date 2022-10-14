import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextField } from './TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
  parameters: { controls: { sort: 'requiredFirst' } },
  controls: { hideNoControlsWarning: true },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;


export const Border = Template.bind({});
Border.args = {
  label: 'Label text',
  variant: 'border',
  message: '',
  error: false,
  withShadow: false,
}
Border.argTypes = {
  variant: {
    table: { disable: true }
  },
  inputClassName: {
    table: { disable: true }
  },
  placeholder: {
    table: { disable: true }
  }
};

export const Underline = Template.bind({});
Underline.args = {
  label: 'Label text',
  variant: 'underline',
  message: '',
  error: false,
  withShadow: false,
};
Underline.argTypes = {
  variant: {
    table: { disable: true }
  },
  inputClassName: {
    table: { disable: true }
  },
  placeholder: {
    table: { disable: true }
  }
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  placeholder: 'Placeholder text',
  variant: 'border',
  message: '',
  error: false,
  withShadow: false,
};
WithoutLabel.argTypes = {
  inputClassName: {
    table: { disable: true }
  },
  label: {
    table: { disable: true }
  }
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  variant: 'border',
  label: 'Label text',
  message: 'it\'s a error'
};

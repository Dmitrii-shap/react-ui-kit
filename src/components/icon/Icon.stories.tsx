import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from "../typography/Typography";
import { Icon } from "./Icon";
import * as Icons from "./icons";
import { IconNames } from './models';

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {controls: {sort: 'requiredFirst'}},
  controls: {hideNoControlsWarning: true},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => {
  const tags = Object.keys(Icons) as IconNames[];

  return <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',}}>
    {tags.map(name => (<div key={name} style={{textAlign: 'center', margin: '10px'}}>
        <Icon {...args} name={name} />
        <br />
        <Typography variant={"p5"} align="center">{name}</Typography>
      </div>
    ))}
  </div>
}

export const IconTable = Template.bind({});
IconTable.args = {
  size: 3,
  color: 'primary'
}
IconTable.argTypes = {
  name: {
    table: {disable: true}
  },
  width: {
    table: {disable: true}
  },
  height: {
    table: {disable: true}
  },
  className: {
    table: {disable: true}
  },
};

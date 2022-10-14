import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from "./Typography";

export default {
  title: 'Components/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) =>
  <>
    <Typography {...args} />
    <Typography {...args} />
  </>;

export const Variants = Template.bind({});
Variants.args = {
  variant: 'p1',
  color: 'textPrimary',
  isInline: false,
  align: "left",
  fontWeight: 'regular',
  fontStyle: 'normal',
  isOpacity: false,
  children: 'Съешь же ещё этих мягких французских булок, да выпей чаю',
};

export const Headers = () => <>
  <Typography variant='h1' children="h1 - 64px, Bold, LH 68px" />
  <br />
  <Typography variant='h2' children="h2 - 48px Bold, LH 52px" />
  <br />
  <Typography variant='h3' children="h3 - 36px LH 40px" />
</>

export const SubHeaders = () => <>
  <Typography variant="h4" children="h4 32px LH 36px" />
  <br />
  <Typography variant='h5' children="h5 28px LH 32px" />
  <br />
  <Typography variant='h6' children="h6 22px LH 26px" />
</>

export const Paragraphs = () => <>
  <Typography variant='p1' children="p1 - 21px FW 300 LH 24px" />
  <Typography variant='p1'>
    Съешь же ещё этих мягких французских булок, да выпей чаю
  </Typography>

  <br /><br />

  <Typography variant='p2' children="p2 - 18px FW 300 LH 22px" />
  <Typography variant='p2'>
    Съешь же ещё этих мягких французских булок, да выпей чаю
  </Typography>

  <br /><br />

  <Typography variant='p3' children="p3 - 16px FW 300 LH 20px" />
  <Typography variant='p3'>
    Съешь же ещё этих мягких французских булок, да выпей чаю
  </Typography>

  <br /><br />

  <Typography variant='p4' children="p4 - 14px FW 300 LH 18px" />
  <Typography variant='p4'>
    Съешь же ещё этих мягких французских булок, да выпей чаю
  </Typography>

  <br /><br />

  <Typography variant='p5' children="p5 - 12px FW 300  LH 16px" />
  <Typography variant='p5'>
    Съешь же ещё этих мягких французских булок, да выпей чаю
  </Typography>

  <br /><br />

  <Typography variant='p6' children="p6 - 10px  FW 300 LH 12px" />
  <Typography variant='p6'>
    Съешь же ещё этих мягких французских булок, да выпей чаю
  </Typography>
</>

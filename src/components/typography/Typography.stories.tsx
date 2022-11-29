import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from './Typography';

export default {
    title: 'Components/Typography',
    component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
    <>
        <Typography {...args} />
        <Typography {...args} />
    </>
);

export const Variants = Template.bind({});
Variants.args = {
    variant: 'p1',
    color: 'textPrimary',
    isInline: false,
    align: 'left',
    fontWeight: 'regular',
    fontStyle: 'normal',
    isOpacity: false,
    children: 'Съешь же ещё этих мягких французских булок, да выпей чаю',
};

export const Headers = () => (
    <>
        <Typography variant="h1"> h1 - 64px, Bold, LH 68px</Typography>
        <br />
        <Typography variant="h2">h2 - 48px Bold, LH 52px </Typography>
        <br />
        <Typography variant="h3">h3 - 36px LH 40px</Typography>
    </>
);

export const SubHeaders = () => (
    <>
        <Typography variant="h4">h4 32px LH 36px </Typography>
        <br />
        <Typography variant="h5">h5 28px LH 32px</Typography>
        <br />
        <Typography variant="h6">h6 22px LH 26px</Typography>
    </>
);

export const Paragraphs = () => (
    <>
        <Typography variant="p1">p1 - 21px FW 300 LH 24px</Typography>
        <Typography variant="p1">Съешь же ещё этих мягких французских булок, да выпей чаю</Typography>

        <br />
        <br />

        <Typography variant="p2">p2 - 18px FW 300 LH 22px</Typography>
        <Typography variant="p2">Съешь же ещё этих мягких французских булок, да выпей чаю</Typography>

        <br />
        <br />

        <Typography variant="p3">p3 - 16px FW 300 LH 20px</Typography>
        <Typography variant="p3">Съешь же ещё этих мягких французских булок, да выпей чаю</Typography>

        <br />
        <br />

        <Typography variant="p4">p4 - 14px FW 300 LH 18px</Typography>
        <Typography variant="p4">Съешь же ещё этих мягких французских булок, да выпей чаю</Typography>

        <br />
        <br />

        <Typography variant="p5">p5 - 12px FW 300 LH 16px</Typography>
        <Typography variant="p5">Съешь же ещё этих мягких французских булок, да выпей чаю</Typography>

        <br />
        <br />

        <Typography variant="p6">p6 - 10px FW 300 LH 12px</Typography>
        <Typography variant="p6">Съешь же ещё этих мягких французских булок, да выпей чаю</Typography>
    </>
);

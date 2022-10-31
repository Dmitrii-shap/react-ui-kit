import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AlertManager } from './AlertManager';
import { Button } from '../button/Button';
import useAlert from './useAlert';
import { Typography } from '../typography/Typography';

export default {
    title: 'Components/AlertManager',
    component: AlertManager,
    parameters: {
        layout: 'centered',
    },
} as ComponentMeta<typeof AlertManager>;

const AddAlertButton = () => {
    const { add } = useAlert();

    return (
        <div style={{height: '100%'}}>
            <Button color="secondary" onClick={() => add({ children: <Typography variant='p4'>Info alert</Typography> })}>Show info alert</Button>
            <br /> <br />
            <Button color="primary" onClick={() => add({ children: <Typography variant='p4'>Success alert</Typography>, color: 'success' })}>Show success alert</Button>
            <br /> <br />
            <Button color="warning" onClick={() => add({ children: <Typography variant='p4'>Warning alert</Typography>, color: 'warning' })}>Show warning alert</Button>
            <br /> <br />
            <Button color="error" onClick={() => add({ children: <Typography variant='p4'>Error alert</Typography>, color: 'error' })}>Show error alert</Button>
        </div>
    );
};
const Template: ComponentStory<typeof AlertManager> = (args) => {
    return (
        <AlertManager {...args}>
            <AddAlertButton />
        </AlertManager>
    );
};


export const Alert = Template.bind({});
Alert.args = {
    positions: ['bottom', 'right'],
    defaultTimer: 10000,
};

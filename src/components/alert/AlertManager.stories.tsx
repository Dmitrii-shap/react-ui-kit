import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import AlertManager from './AlertManager';
import useAlert from './useAlert';

import { Button } from '../button/Button';
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
        <div style={{ height: '100%' }}>
            <Button color='secondary'
                    onClick={() => add({ children: <Typography variant='p4'>Info alert</Typography> })}>Show info
                alert</Button>
            <br /> <br />
            <Button color='primary' onClick={() => add({
                children: <Typography variant='p4'>Success alert Success alert</Typography>,
                color: 'success',
            })}>Show success alert </Button>
            <br /> <br />
            <Button color='warning' onClick={() => add({
                children: <Typography variant='p4'>Warning alert</Typography>,
                color: 'warning',
            })}>Show warning alert</Button>
            <br /> <br />
            <Button color='error' onClick={() => add({
                children: <Typography variant='p4'>Error alert</Typography>,
                color: 'error',
            })}>Show error alert</Button>
            <br /> <br />
            <Button color='secondary' onClick={() => add({
                children: <Typography variant='p4'>Alert with close button and timer 5 second</Typography>,
                color: 'info',
                timer: 5000,
                showClose: true,
            })}>Show with close button</Button>
            <br /> <br />
            <Button color='secondary' onClick={() => add({
                children: <Typography variant='p4'>Alert with Callback on close</Typography>,
                color: 'info',
                timer: 5000,
                showClose: true,
                onClose: () => alert('CLOSE'),
            })}>Show with callback on close</Button>
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
    positions: ['top', 'left'],
    defaultShowClose: false,
};
Alert.argTypes = {
    defaultShowClose: {
        table: { disable: true },
    },
    defaultTimer: {
        table: { disable: true },
    },
};

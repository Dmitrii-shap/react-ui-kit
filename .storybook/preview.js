import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../src';
import { GlobalBody } from '../src/styled/global-body';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    (Story) => (
        <ThemeProvider theme={createTheme()}>
            <GlobalBody />
            <Story />
        </ThemeProvider>
    ),
];

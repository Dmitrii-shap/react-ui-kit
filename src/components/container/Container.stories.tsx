import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { useTheme } from "styled-components";
import { useMedia } from "../../hooks/useMedia";

import { Container } from "./Container";

export default {
  title: 'Components/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

export const Example = () => {
  const theme = useTheme();
  const breakpointsValue = useMedia({
    queries: {
      [theme.breakpoints.down('xs')]: 'xs',
      [theme.breakpoints.down('sm')]: 'sm',
      [theme.breakpoints.down('md')]: 'md'
    },
    defaultValue: 'defaultValue'
  })

  return (
    <div style={{border: '1px solid black', padding: '20px 0'}}>
      <div style={{textAlign: 'center', fontSize: '40px', marginBottom: 20}}>Page: {breakpointsValue}</div>
      <Container style={{border: '1px solid black'}}>
        <div style={{
          background: '#1EA7FD',
          height: 200,
          color: '#fff',
          fontSize: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}> Content
        </div>
      </Container>
    </div>
  )
}


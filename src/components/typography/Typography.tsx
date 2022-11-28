import React, { FC, PropsWithChildren } from 'react';
import { htmlElementMap } from './mappers/html-element.map';
import { TypographyProps } from './models';
import { StyledTypography } from './styles/styled-typography';

export const Typography: FC<PropsWithChildren<TypographyProps>> = ({ children, ...props }) => (
    <StyledTypography as={htmlElementMap(props.variant)} {...props}>
        {children}
    </StyledTypography>
);

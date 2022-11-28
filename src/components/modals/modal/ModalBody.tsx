import React, { FC, PropsWithChildren } from 'react';
import { StyledModalBody } from './styled/styled-modal-body';

export const ModalBody: FC<PropsWithChildren> = ({ children, ...props }) => (
    <StyledModalBody {...props}>{children}</StyledModalBody>
);

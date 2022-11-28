import React, { FC, PropsWithChildren } from 'react';
import { ModalActionsProps } from './models';
import { StyledModalActions } from './styled/styled-modal-actions';

export const ModalActions: FC<PropsWithChildren<ModalActionsProps>> = ({ children, align = 'right', ...props }) => (
    <StyledModalActions {...props} align={align}>
        {children}
    </StyledModalActions>
);

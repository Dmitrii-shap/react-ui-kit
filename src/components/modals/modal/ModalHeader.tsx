import React, { FC } from 'react';
import { Typography } from '../../typography/Typography';
import { ModalHeaderProps } from './models';
import { StyledModalHeader } from './styled/styled-modal-header';

export const ModalHeader: FC<ModalHeaderProps> = ({title}) => (
    <StyledModalHeader>
        <Typography variant="h4">{title}</Typography>
    </StyledModalHeader>
)

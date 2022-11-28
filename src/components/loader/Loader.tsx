import React, { FC } from 'react';
import { LoaderProps } from './models';
import { StyledLoaderContainer } from './styles/styled-loader-container';
import { CircularProgress } from '../circular-progress/CircularProgress';

export const Loader: FC<LoaderProps> = ({ variant = 'static', size = 'medium', width, height }) => {
    return (
        <StyledLoaderContainer variant={variant} width={width} height={height}>
            <CircularProgress size={size} />
        </StyledLoaderContainer>
    );
};

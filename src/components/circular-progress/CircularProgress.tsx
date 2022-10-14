import React, { FC } from 'react';
import { CircularProgressProps } from './models';
import { StyledCircularProgress } from './styles/styled-circular-progress';
import { StyledCircularProgressContainer } from './styles/styled-circular-progress-container';
import { StyledCircularProgressBorder } from './styles/styled-cilrcular-progress-border';
import { circleThickness, circleViewBoxDimension } from './const';

/**
 * Circular progress UI component
 */

export const CircularProgress: FC<CircularProgressProps> = ({
    color= 'primary',
    size = 'medium',
    progressValue
}) => {
    const props = { size, color, progressValue };

    return (
        <StyledCircularProgressContainer {...props}>
            <StyledCircularProgressBorder {...props} />
            <StyledCircularProgress
                {...props}
            >
                <svg viewBox={`22 22 ${circleViewBoxDimension} ${circleViewBoxDimension}`}>
                    <circle cx='44' cy='44' r='19.5' fill='none' strokeWidth={circleThickness} />
                </svg>
            </StyledCircularProgress>
        </StyledCircularProgressContainer>
    );
};


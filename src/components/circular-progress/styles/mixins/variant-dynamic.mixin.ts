import { css } from 'styled-components';
import { getCircumference } from '../../utils/get-сircumference';
import { getAbsolutePercentage } from '../../utils/get-absolute-percentage';
import { circleThickness, circleViewBoxDimension } from '../../const';

export const variantDynamicMixin = (progressValue: number) => css`
    circle {
        stroke-dasharray: ${getCircumference(circleViewBoxDimension, circleThickness).toFixed(3)};
        stroke-dashoffset: ${(
            getAbsolutePercentage(progressValue) * getCircumference(circleViewBoxDimension, circleThickness)
        ).toFixed(3)}px;
    }
`;

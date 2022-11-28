import { css, keyframes } from 'styled-components';
import { getAbsolutePercentage } from '../../utils/get-absolute-percentage';
import { circleThickness, circleViewBoxDimension } from '../../const';
import { getCircumference } from '../../utils/get-сircumference';

const bottomProgressPoint = getAbsolutePercentage(1) * getCircumference(circleViewBoxDimension, circleThickness);

const upperProgressPoint = getAbsolutePercentage(80) * getCircumference(circleViewBoxDimension, circleThickness);

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const drawProgress = (start: number, end: number) => keyframes`
  0% {
    stroke-dashoffset: ${start}px
  }
  50% {
    stroke-dashoffset: ${end}px
  }
  100% {
    stroke-dashoffset: ${start}px
  }
`;

export const variantStaticMixin = css`
    animation: ${rotate} 1.5s ease-in-out infinite;

    circle {
        stroke-dasharray: ${getCircumference(circleViewBoxDimension, circleThickness).toFixed(3)};
        animation: ${drawProgress(bottomProgressPoint, upperProgressPoint)} 3s ease-in-out infinite;
    }
`;

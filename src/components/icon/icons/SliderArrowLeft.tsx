import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgSliderArrowLeft: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 10 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.88 16 10 13.797l-5.72-5.77L9.917 2.17 7.764 0 1.815 6.183 0 8l.25.254 1.92 1.967.009-.009L7.88 16Z"
            fill="inherit"
        />
    </svg>
);
export default SvgSliderArrowLeft;

import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgSliderArrowRight: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M2.12 16 0 13.797l5.72-5.77L.083 2.17 2.236 0l5.949 6.183L10 8l-.25.254-1.92 1.967-.009-.009L2.12 16Z"
            fill="inherit"
        />
    </svg>
);
export default SvgSliderArrowRight;

import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgShowLess: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 12.88 15.797 15l-5.77-5.72-5.857 5.636L2 12.764l6.183-5.949L10 5l.254.25 1.967 1.92-.009.009L18 12.88Z"
            fill="inherit"
        />
    </svg>
);
export default SvgShowLess;

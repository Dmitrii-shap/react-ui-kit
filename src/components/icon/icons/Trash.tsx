import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgTrash: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M3.333 5.833 5 19.168h10l1.667-13.334H3.333ZM5.221 7.5l1.25 10h7.058l1.25-10H5.22Z"
            fill="inherit"
        />
        <path
            d="M3.333 2.5h13.334v1.667H3.333V2.5ZM8.334.833h3.333V2.5H8.334V.833ZM8.906 8.94l.581 6.642-1.66.145-.581-6.641 1.66-.146ZM10.546 15.582l.58-6.642 1.661.146-.58 6.64-1.661-.145Z"
            fill="inherit"
        />
    </svg>
);
export default SvgTrash;

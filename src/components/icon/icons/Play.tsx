import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgPlay: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M18 9.66 3 1v17.32l15-8.66Zm-4 0L5 4.464v10.392l9-5.196Z"
            fill="inherit"
        />
    </svg>
);
export default SvgPlay;

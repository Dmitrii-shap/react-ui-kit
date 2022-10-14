import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgInfo: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M19 10c0-4.963-4.037-9-9-9s-9 4.037-9 9 4.037 9 9 9 9-4.037 9-9ZM2.5 10c0-4.135 3.365-7.5 7.5-7.5 4.134 0 7.5 3.365 7.5 7.5 0 4.134-3.366 7.5-7.5 7.5-4.135 0-7.5-3.366-7.5-7.5ZM10 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm.75 10V8h-1.5v7h1.5Z"
            fill="inherit"
        />
    </svg>
);
export default SvgInfo;

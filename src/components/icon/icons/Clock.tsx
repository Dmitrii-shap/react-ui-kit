import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgClock: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 16.5a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Zm.75-8.25h3v1.5h-4.5v-6h1.5v4.5Z"
            fill="inherit"
        />
    </svg>
);
export default SvgClock;

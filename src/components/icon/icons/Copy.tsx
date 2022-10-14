import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgCopy: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M11.5 3.5h-7v9H7V6h4.5V3.5ZM13 6h4v12H7v-4H3V2h10v4ZM8.5 7.5h7v9h-7v-9Z"
            fill="#C4C4C4"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5 3.5V6H7v6.5H4.5v-9h7ZM13 6V2H3v12h4v4h10V6h-4ZM8.5 7.5v9h7v-9h-7Z"
            fill="inherit"
        />
    </svg>
);
export default SvgCopy;

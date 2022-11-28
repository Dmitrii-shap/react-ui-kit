import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgFlag: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M10.5 4.5h-5v5h5v-5ZM4 3v8h8V3H4Z" fill="inherit" />
        <path fillRule="evenodd" clipRule="evenodd" d="M3 18V2h2v16H3Z" fill="inherit" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 18H2v-2h4v2ZM9 11.001v2.5h9l-.938-1.5-1.563-2.5 1.563-2.5.938-1.5h-6v1.5h3.293l-1.066 1.705-.496.795.496.795 1.066 1.705H10.5v-1H9Z"
            fill="inherit"
        />
    </svg>
);
export default SvgFlag;

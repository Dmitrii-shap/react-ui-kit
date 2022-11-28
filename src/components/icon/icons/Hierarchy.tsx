import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgHierarchy: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
    >
        <path d="M17.25 11.25h-7.5v-2.5h7.5v2.5Zm0 3.5v2.5h-7.5v-2.5h7.5Z" stroke="inherit" strokeWidth={1.5} />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.05 17.95V7.05h1.9v2h2v1.9h-2v5.1h2v1.9h-3.9ZM11 6H2V2h9v4Z"
            fill="inherit"
        />
    </svg>
);
export default SvgHierarchy;

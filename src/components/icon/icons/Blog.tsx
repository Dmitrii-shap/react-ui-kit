import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgBlog: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="m17.842 2.69-.532-.532a2.25 2.25 0 0 0-3.18 0L2.61 13.678 1.5 18.5l4.822-1.11 11.52-11.52a2.25 2.25 0 0 0 0-3.18ZM6.015 13.985l-1.268-.33 8.1-8.092 1.59 1.59-8.092 8.1-.33-1.268Zm-2.168.99.938.24.24.938-1.5.352.322-1.53Zm12.93-10.162-1.275 1.282-1.597-1.597 1.282-1.275a.75.75 0 0 1 1.065 0l.525.525a.75.75 0 0 1 0 1.065Z"
            fill="inherit"
        />
    </svg>
);
export default SvgBlog;

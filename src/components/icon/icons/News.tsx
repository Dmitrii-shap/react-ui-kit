import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgNews: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M15.968 7H8.5V5.5h7.468V7Zm-3.187 5.171h3.187V8.337h-3.187v3.835Zm-1.06-3.83H8.51L8.5 9.756h3.213l.009-1.415Zm4.247 5.025h-7.46v1.468h7.46v-1.468ZM4.384 15.484a.642.642 0 0 0 .642-.642V7.984H3.742v6.86a.642.642 0 0 0 .642.64ZM5.784 2.5H18.5v12.347a2.888 2.888 0 0 1-2.884 2.884H4.382A2.888 2.888 0 0 1 1.5 14.847V7.98h1.487v6.868a1.4 1.4 0 1 0 2.798 0V7.98L5.783 2.5Zm1.12 13.745h8.712a1.4 1.4 0 0 0 1.4-1.4V3.989H7.267v10.859c0 .49-.125.97-.364 1.398Z"
            fill="inherit"
        />
        <path d="M8.509 10.756h3.213l-.01 1.415H8.5l.009-1.415Z" fill="inherit" />
    </svg>
);
export default SvgNews;

import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgTuning: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
    >
        <path fill="inherit" d="M15 7.5h3v-2h-3zM2 7.5h8v-2H2z" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 10a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm-1.75-3.5a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0Z"
            fill="inherit"
        />
        <path fill="inherit" d="M6 14.5H2v-2h4zM18 14.5h-7v-2h7z" />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.75-3.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
            fill="inherit"
        />
    </svg>
);
export default SvgTuning;

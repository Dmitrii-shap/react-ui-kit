import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgPc: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M3 3h14v9H3V3ZM1 14V1h18v14h-8v2h4v2H5v-2h4v-2H1v-1Z"
            fill="inherit"
        />
    </svg>
);
export default SvgPc;

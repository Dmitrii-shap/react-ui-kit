import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgMessage: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M1 2v14.25h4.5v3.51l4.748-3.51H19V2H1Zm16.5 12.75H9.752L7 16.79v-2.04H2.5V3.5h15v11.25Z"
            fill="inherit"
        />
        <path fill="inherit" d="M5 8h2v2H5zM9 8h2v2H9zM13 8h2v2h-2z" />
    </svg>
);
export default SvgMessage;

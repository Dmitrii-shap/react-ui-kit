import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgFileOk: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M13.807 1H3v18h14.25V4.442L13.807 1ZM4.5 17.5v-15h8.25v3h3v12H4.5Z"
            fill="inherit"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m9.206 11.195 3.615-3.624 1.126 1.126-4.741 4.733-2.635-2.626 1.126-1.126 1.509 1.517Z"
            fill="inherit"
        />
    </svg>
);
export default SvgFileOk;

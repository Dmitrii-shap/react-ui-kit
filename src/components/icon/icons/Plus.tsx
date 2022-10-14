import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgPlus: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M11.25 8.75V3h-2.5v5.75H3v2.5h5.75V17h2.5v-5.75H17v-2.5h-5.75Z"
            fill="inherit"
        />
    </svg>
);
export default SvgPlus;

import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgPin: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M9.956 1A6.756 6.756 0 0 0 3.2 7.756c0 4.774 6.005 10.508 6.238 10.749l.518.495.518-.495c.255-.24 6.238-6.005 6.238-10.75A6.756 6.756 0 0 0 9.956 1Zm0 15.898C8.537 15.397 4.7 11.141 4.7 7.756a5.254 5.254 0 1 1 10.51 0c0 3.385-3.837 7.671-5.255 9.142Zm0-12.145a3.002 3.002 0 1 0 0 6.005 3.002 3.002 0 0 0 0-6.005Zm0 4.504a1.501 1.501 0 1 1 0-3.003 1.501 1.501 0 0 1 0 3.003Z"
            fill="inherit"
        />
    </svg>
);
export default SvgPin;

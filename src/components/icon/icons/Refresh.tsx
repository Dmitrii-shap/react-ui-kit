import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgRefresh: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M8.069 4.158c-3.234.858-5.14 4.145-4.278 7.33.86 3.184 4.17 5.086 7.404 4.228 3.233-.859 5.14-4.146 4.278-7.33a5.952 5.952 0 0 0-2.244-3.261l.437 1.615-1.933.513-1.334-4.932L15.369 1l.523 1.93-1.679.446a7.957 7.957 0 0 1 3.193 4.496c1.154 4.265-1.403 8.636-5.689 9.773-4.286 1.138-8.706-1.38-9.86-5.646C.705 7.736 3.26 3.366 7.548 2.228l.522 1.931Z"
            fill="inherit"
        />
    </svg>
);
export default SvgRefresh;

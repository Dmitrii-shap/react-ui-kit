import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgSortArrows: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M7.194 15.661V6.143l1.92 1.92 1.357-1.357-4.236-4.235L2 6.706l1.357 1.357 1.919-1.92v9.518h1.918Zm9.45-3.709-1.92 1.92V4.353h-1.918v9.518l-1.92-1.92-1.357 1.357 4.236 4.235L18 13.308l-1.357-1.356Z"
            fill="inherit"
        />
    </svg>
);
export default SvgSortArrows;

import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgDoc: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M16.5 3.5h-13v13h13v-13ZM2 2v16h16V2H2Z"
            fill="inherit"
        />
        <path
            fill="inherit"
            d="M5 6.25h10v1.5H5zM5 9.25h10v1.5H5zM5 12.25h10v1.5H5z"
        />
    </svg>
);
export default SvgDoc;

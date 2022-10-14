import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgSortMaxMin: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M2 16h8v-2H2v2Zm0-5h12V9H2v2Zm16-7v2H2V4h16Z"
            fill="inherit"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 16h8v-2H2v2Zm0-5h12V9H2v2Zm16-7v2H2V4h16Z"
            fill="inherit"
        />
    </svg>
);
export default SvgSortMaxMin;

import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgSortMinMax: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M10 16H2v-2h8v2Zm4-5H2V9h12v2Z" fill="inherit" />
        <path fillRule="evenodd" clipRule="evenodd" d="M2 4h8v2H2V4Zm0 5h12v2H2V9Zm16 7v-2H2v2h16Z" fill="inherit" />
    </svg>
);
export default SvgSortMinMax;

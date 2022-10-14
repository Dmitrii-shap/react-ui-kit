import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgList: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M3 16h2v-2H3v2Zm0-5h2V9H3v2Zm2-5H3V4h2v2ZM7 16h10v-2H7v2Zm0-5h10V9H7v2Zm10-5H7V4h10v2Z"
            fill="inherit"
        />
    </svg>
);
export default SvgList;

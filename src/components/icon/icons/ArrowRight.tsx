import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgArrowRight: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="m12.212 9.094-1.813-1.813L11.68 6l4 4-4 4-1.281-1.281 1.813-1.813H5V9.094h7.212Z"
            fill="inherit"
        />
    </svg>
);
export default SvgArrowRight;

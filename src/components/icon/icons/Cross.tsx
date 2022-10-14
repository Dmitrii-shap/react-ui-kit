import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgCross: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="m11.768 10 4.066-4.066-1.768-1.768L10 8.232 5.934 4.166 4.166 5.934 8.232 10l-4.066 4.066 1.768 1.768L10 11.768l4.066 4.066 1.768-1.768L11.768 10Z"
            fill="inherit"
        />
    </svg>
);
export default SvgCross;

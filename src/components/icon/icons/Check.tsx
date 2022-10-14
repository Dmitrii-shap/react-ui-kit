import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgCheck: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M18.125 6.131 7.973 16.191 2 10.117l2.139-2.103L8 11.94 16.014 4l2.111 2.131Z"
            fill="inherit"
        />
    </svg>
);
export default SvgCheck;

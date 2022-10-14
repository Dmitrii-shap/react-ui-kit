import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgCheckinCircle: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M10.11 16.5c3.668 0 6.608-2.93 6.608-6.5s-2.94-6.5-6.609-6.5C6.44 3.5 3.5 6.43 3.5 10s2.94 6.5 6.61 6.5Zm0 1.5c4.478 0 8.108-3.582 8.108-8s-3.63-8-8.109-8C5.631 2 2 5.582 2 10s3.63 8 8.11 8Z"
            fill="inherit"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m14.668 7.898-4.972 5.78-4.061-3.692 1.345-1.48 2.54 2.309 3.632-4.221 1.516 1.304Z"
            fill="inherit"
        />
    </svg>
);
export default SvgCheckinCircle;

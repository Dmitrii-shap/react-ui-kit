import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgCloud: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M16.974 8.82v-.473A5.255 5.255 0 0 0 11.826 3c-1.54.013-2.99.72-3.95 1.925a3.14 3.14 0 0 0-1.527-.397 3.384 3.384 0 0 0-3.323 3.437c-.001.273.032.545.1.81a4.193 4.193 0 0 0-2.292 3.773 4.132 4.132 0 0 0 4.048 4.201h10.236a4.132 4.132 0 0 0 4.048-4.201 4.193 4.193 0 0 0-2.192-3.728Zm-1.833 6.402H4.905a2.605 2.605 0 0 1-2.52-2.674 2.635 2.635 0 0 1 1.932-2.59h.077a2.467 2.467 0 0 1 1.107 0l.374-1.481A4.048 4.048 0 0 0 4.63 8.37a1.856 1.856 0 0 1 1.742-2.307c.446.005.874.183 1.192.497l.045.038c.212.215.372.476.466.764l1.467-.436a3.407 3.407 0 0 0-.497-1 3.498 3.498 0 0 1 2.804-1.414 3.728 3.728 0 0 1 3.62 3.82 3.918 3.918 0 0 0-1.298.099l.374 1.482c.377-.092.77-.092 1.146 0l.206.069a2.65 2.65 0 0 1 1.765 2.566 2.605 2.605 0 0 1-2.521 2.674Z"
            fill="inherit"
        />
    </svg>
);
export default SvgCloud;

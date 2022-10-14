import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgArrowRightInCircle: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M16.718 10c0 3.57-2.94 6.5-6.609 6.5C6.44 16.5 3.5 13.57 3.5 10s2.94-6.5 6.61-6.5c3.668 0 6.608 2.93 6.608 6.5Zm1.5 0c0 4.418-3.63 8-8.109 8C5.631 18 2 14.418 2 10s3.63-8 8.11-8c4.478 0 8.108 3.582 8.108 8Zm-8.03-2.25 1.501 1.5H5.72v1.5h5.97l-1.5 1.5 1.06 1.062L14.561 10l-3.312-3.312-1.06 1.061Z"
            fill="inherit"
        />
    </svg>
);
export default SvgArrowRightInCircle;

import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgExport: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M17.89 14.263V19H2.1v-4.737H3.68v3.158h12.632v-3.158h1.579ZM14.503 5.5l-1.121 1.121-2.598-2.605v11.518H9.205V4.016L6.608 6.62 5.487 5.5 9.995 1l4.508 4.5Z"
            fill="inherit"
        />
    </svg>
);
export default SvgExport;

import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgDownload: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M17.89 14.263V19H2.1v-4.737H3.68v3.158h12.632v-3.158h1.579Zm-3.387-3.229-1.121-1.12-2.598 2.604V1H9.205v11.518L6.608 9.913l-1.121 1.121 4.508 4.5 4.508-4.5Z"
            fill="inherit"
        />
    </svg>
);
export default SvgDownload;

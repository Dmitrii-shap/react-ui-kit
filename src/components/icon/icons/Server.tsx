import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgServer: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M16 2v4H4V2h12ZM2 6V0h16v14h-7v2h1v1h7v2h-7v1H8v-1H1v-2h7v-1h1v-2H2V6Zm14 6V8H4v4h12ZM5 9v2h2V9H5Zm0-4V3h2v2H5Zm3 0V3h2v2H8Zm0 4v2h2V9H8Z"
            fill="inherit"
        />
    </svg>
);
export default SvgServer;

import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgFileText: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M13.807 1H3v18h14.25V4.442L13.807 1ZM4.5 17.5v-15h8.25v3h3v12H4.5ZM6 10h8v1.5H6V10Zm0-3h8v1.5H6V7Zm5 7.5H6V13h5v1.5Z"
            fill="inherit"
        />
    </svg>
);
export default SvgFileText;

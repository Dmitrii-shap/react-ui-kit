import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgEmail: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M17.183 6.59v7.058L13.01 9.935l4.173-3.345Zm-.941 8.229-4.419-3.932-1.813 1.454-1.726-1.386-4.342 3.864h12.3ZM2.814 13.815l4.283-3.812-4.283-3.439v7.25ZM16.17 5.479H3.858l6.153 4.939 6.16-4.94Z"
            fill="inherit"
        />
    </svg>
);
export default SvgEmail;

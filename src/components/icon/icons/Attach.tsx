import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgAttach: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="m15.528 8.663-4.698 4.639a2.33 2.33 0 0 1-3.212 0 2.26 2.26 0 0 1 .003-3.204l4.463-4.463L13.15 6.7l-4.473 4.463-.002.003a.78.78 0 0 0-.221.53v.005c0 .2.08.394.223.536l.005.004a.78.78 0 0 0 1.074 0l4.643-4.653a2.25 2.25 0 0 0-.001-3.227l-.003-.003a2.34 2.34 0 0 0-3.213 0L5.826 9.785l-.008.008a3.79 3.79 0 0 0 5.354 5.354l5.198-5.19 1.093 1.011-5.176 5.176a5.294 5.294 0 0 1-7.486-7.486l5.377-5.338a3.88 3.88 0 0 1 5.352 0 3.75 3.75 0 0 1-.002 5.343Z"
            fill="inherit"
        />
    </svg>
);
export default SvgAttach;

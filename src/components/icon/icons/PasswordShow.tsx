import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgPasswordShow: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M10 5.75a4.5 4.5 0 0 0 0 9 4.5 4.5 0 1 0 0-9Zm0 7.5a3 3 0 1 1 0-6 3 3 0 1 1 0 6Zm.75-3h1.5A2.25 2.25 0 1 1 10 8v1.5a.75.75 0 0 0-.525 1.283.862.862 0 0 0 .525.21.75.75 0 0 0 .75-.75v.007Zm8.122-.277C17.837 7.46 14.5 3.5 10 3.5c-4.545 0-7.838 3.982-8.85 6.465L1 10.25l.12.285C2.162 13.04 5.5 17 10 17c4.545 0 7.837-3.982 8.85-6.465l.15-.285-.128-.277ZM10 15.5c-3.75 0-6.45-3.367-7.358-5.25C3.527 8.375 6.227 5 9.985 5c3.75 0 6.45 3.367 7.358 5.25C16.48 12.125 13.75 15.5 10 15.5Z"
            fill="inherit"
        />
    </svg>
);
export default SvgPasswordShow;

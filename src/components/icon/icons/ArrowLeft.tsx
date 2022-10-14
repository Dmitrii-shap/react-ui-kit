import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgArrowLeft: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="m8.468 9.094 1.813-1.813L9.001 6l-4 4 4 4 1.28-1.281-1.813-1.813h7.212V9.094H8.468Z"
            fill="inherit"
        />
    </svg>
);
export default SvgArrowLeft;

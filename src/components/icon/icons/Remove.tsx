import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgRemove: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.965 8.55l3.395-3.394 1.414 1.414-3.395 3.395 3.395 3.394-1.414 1.415-3.395-3.395-3.395 3.395-1.414-1.415L8.55 9.965 5.156 6.57 6.57 5.156 9.965 8.55Z"
            fill="inherit"
        />
    </svg>
);
export default SvgRemove;

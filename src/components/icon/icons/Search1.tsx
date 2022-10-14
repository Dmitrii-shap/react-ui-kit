import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgSearch1: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M8.996 14.491a5.496 5.496 0 1 0 0-10.99 5.496 5.496 0 0 0 0 10.99Zm5.305-.936a6.996 6.996 0 1 0-1.094 1.027l4.263 4.263 1.06-1.06-4.229-4.23ZM8.996 6.248a2.748 2.748 0 0 0-2.748 2.748h-1.5a4.248 4.248 0 0 1 4.248-4.248v1.5Z"
            fill="inherit"
        />
    </svg>
);
export default SvgSearch1;

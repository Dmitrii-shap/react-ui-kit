import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgSend: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M19.013 10 1 2l1.71 6.843L9 10l-6.29 1.157L1 18l18.013-8Z"
            fill="inherit"
        />
    </svg>
);
export default SvgSend;

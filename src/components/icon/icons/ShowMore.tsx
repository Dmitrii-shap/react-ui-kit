import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgShowMore: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M18 7.12 15.797 5l-5.77 5.72L4.17 5.083 2 7.236l6.183 5.949L10 15l.254-.25 1.967-1.92-.009-.009L18 7.12Z"
            fill="inherit"
        />
    </svg>
);
export default SvgShowMore;

import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgMobile: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M14 3v13H6V3h2v1h4V3h2Zm2 14v2H4V1h12v16Z"
            fill="inherit"
        />
    </svg>
);
export default SvgMobile;

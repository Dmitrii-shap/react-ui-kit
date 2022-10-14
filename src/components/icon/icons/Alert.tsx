import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgAlert: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M19 18 10 2 1 18h18Zm-8-6H9V8h2v4Zm0 2v2H9v-2h2Z"
            fill="inherit"
        />
    </svg>
);
export default SvgAlert;

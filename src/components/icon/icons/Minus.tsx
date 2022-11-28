import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgMinus: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M17 11.25H3v-2.5h14v2.5Z" fill="inherit" />
    </svg>
);
export default SvgMinus;

import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgSoundLow: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M5.825 6.7H1.7v6.765h4.125l4.468 4.95h1.204V10h-.003.003V1.75h-1.203L5.824 6.7Zm8.325-.31a4.72 4.72 0 0 1 1.335 3.265v.006c0 1.221-.476 2.391-1.326 3.262l-1.107-1.08a3.12 3.12 0 0 0 .886-2.179 3.173 3.173 0 0 0-.895-2.193l1.107-1.08Z"
            fill="inherit"
        />
    </svg>
);
export default SvgSoundLow;

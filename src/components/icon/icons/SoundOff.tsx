import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgSoundOff: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M1.7 6.7h4.125l4.469-4.95h1.203V10h-.003.003v8.415h-1.204l-4.468-4.95H1.7V6.7ZM16.308 11.386l2.23 2.23 1.077-1.079-2.23-2.23 2.23-2.23L18.538 7l-2.23 2.23L14.078 7 13 8.078l2.23 2.23-2.23 2.23 1.078 1.077 2.23-2.23Z"
            fill="inherit"
        />
    </svg>
);
export default SvgSoundOff;

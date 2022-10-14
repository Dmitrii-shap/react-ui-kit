import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgMailUser: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M5 4a2 2 0 1 0 4.001 0A2 2 0 0 0 5 4Zm-.327 3.254a4 4 0 1 1 4.676-.016c.66.156 1.274.398 1.807.748 1.026.672 1.67 1.69 1.814 3.014H19v9H6v-5H1V11.574c0-1.69.75-2.91 1.977-3.652a5.91 5.91 0 0 1 1.696-.668Zm5.387 2.404c.45.296.772.71.89 1.342H6v2H3V11.574c0-1 .392-1.567 1.01-1.94C4.707 9.214 5.767 9 7.103 9c1.319 0 2.318.239 2.958.658ZM17 13v5H8v-5l4.61 3L17 13Z"
            fill="inherit"
        />
    </svg>
);
export default SvgMailUser;

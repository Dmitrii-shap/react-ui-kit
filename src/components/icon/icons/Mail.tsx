import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgMail: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M1 3v13.5h18V3H1Zm15.308 1.5L10 10.238 3.692 4.5h12.616ZM2.5 5.445 7.232 9.75 2.5 14.055v-8.61ZM3.692 15l4.658-4.238 1.65 1.5 1.65-1.5L16.308 15H3.692Zm13.808-.945L12.768 9.75 17.5 5.445v8.61Z"
            fill="inherit"
        />
    </svg>
);
export default SvgMail;

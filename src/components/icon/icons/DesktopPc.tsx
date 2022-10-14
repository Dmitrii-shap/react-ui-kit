import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgDesktopPc: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M13 5h4v11h-4V5Zm-2 0V3h8v15h-8v-4H8v2h2v2H4v-2h2v-2H1V5h10Zm0 7V7H3v5h8Zm3-2v2h2v-2h-2Zm0-1V7h2v2h-2Z"
            fill="inherit"
        />
    </svg>
);
export default SvgDesktopPc;

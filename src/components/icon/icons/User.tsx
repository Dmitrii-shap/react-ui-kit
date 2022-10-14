import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgUser: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M6.75 5.75a3.25 3.25 0 1 0 6.5 0 3.25 3.25 0 0 0-6.5 0Zm-2.642 6.489v.017L3.5 16.583h13l-.605-4.311-.002-.033c0-1.229-.933-2.156-2.17-2.156H11.73L10 14.236l-1.73-4.152H6.278c-1.236 0-2.17.926-2.17 2.155Z"
            fill="inherit"
        />
    </svg>
);
export default SvgUser;

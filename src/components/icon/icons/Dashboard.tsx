import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgDashboard: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M8.281 2.5h3.438v15H8.28v-15ZM3.125 9.167h3.438V17.5H3.124V9.167Zm13.75-3.334h-3.438V17.5h3.438V5.833Z"
            fill="inherit"
        />
    </svg>
);
export default SvgDashboard;

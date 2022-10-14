import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgMenu: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
    >
        <circle cx={10} cy={10} r={2} fill="inherit" />
        <circle cx={16} cy={10} r={2} fill="inherit" />
        <circle cx={4} cy={10} r={2} fill="inherit" />
    </svg>
);
export default SvgMenu;

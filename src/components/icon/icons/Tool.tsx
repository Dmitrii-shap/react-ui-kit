import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgTool: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M4.642 1.629a5.377 5.377 0 0 1 5.787 1.195 5.364 5.364 0 0 1 1.516 4.572l5.839 5.84.003.002.02.02a3.216 3.216 0 1 1-4.548 4.55l-5.863-5.863a5.362 5.362 0 0 1-4.572-1.516 5.377 5.377 0 0 1-1.195-5.786l.42-1.061 3.78 3.78L7.363 5.83l-3.78-3.78 1.06-.421ZM6.41 2.756 8.633 4.98c.47.47.468 1.232 0 1.7L6.68 8.633a1.205 1.205 0 0 1-1.7 0L2.756 6.41a3.869 3.869 0 0 0 4.727 3.994l.403-.09 6.434 6.433a1.716 1.716 0 0 0 2.445-2.41l.024.021-.042-.039.018.019-.001-.001-6.45-6.45.09-.404A3.87 3.87 0 0 0 6.41 2.756Z"
            fill="inherit"
        />
        <circle cx={15} cy={15} r={1} fill="inherit" />
    </svg>
);
export default SvgTool;

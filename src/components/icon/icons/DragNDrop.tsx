import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgDragNDrop: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
    >
        <g clipPath="url(#DragNDrop_svg__a)" fill="inherit">
            <circle cx={6.5} cy={3} r={2} />
            <circle cx={13.5} cy={3} r={2} />
            <circle cx={6.5} cy={10} r={2} />
            <circle cx={6.5} cy={17} r={2} />
            <circle cx={13.5} cy={10} r={2} />
            <circle cx={13.5} cy={17} r={2} />
        </g>
        <defs>
            <clipPath id="DragNDrop_svg__a">
                <path fill="#fff" d="M0 0h20v20H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgDragNDrop;

import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgWindows: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
    >
        <g clipPath="url(#Windows_svg__a)">
            <path
                d="M2.006 10.467 2 5.265l6.4-.869v6.07H2.006ZM9.467 4.24 17.998 3v7.467h-8.53V4.24ZM18 11.533 17.998 19l-8.53-1.2v-6.267H18Zm-9.6 6.13-6.394-.876v-5.254H8.4v6.13Z"
                fill="inherit"
            />
        </g>
        <defs>
            <clipPath id="Windows_svg__a">
                <path fill="#fff" transform="translate(2 3)" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgWindows;

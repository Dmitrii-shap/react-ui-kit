import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgImages: FC<SVGAttributes<SVGElement>> = (props) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        {...props}
    >
        <g clipPath="url(#Images_svg__a)">
            <path
                d="M18.267 5.258h-2.078V3.18a.677.677 0 0 0-.68-.68H1.68a.69.69 0 0 0-.68.68v10.9c0 .378.302.68.68.68h2.06v2.06c0 .378.302.68.68.68h13.81c.377 0 .68-.302.68-.68V5.938c.037-.378-.265-.68-.643-.68Zm-1.87 3.684A1.097 1.097 0 1 1 15.3 7.846c.604-.019 1.096.473 1.096 1.096ZM3.758 5.938V13.4H2.38V3.88h12.43v1.378H4.44a.677.677 0 0 0-.68.68Zm1.38 10.22v-1.19l3.778-4.345a.807.807 0 0 1 1.228 0l2.663 3.06 1.21-1.34a.722.722 0 0 1 1.076 0l2.475 2.72v1.096H5.138Z"
                fill="inherit"
            />
        </g>
        <defs>
            <clipPath id="Images_svg__a">
                <path fill="#fff" d="M0 0h20v20H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgImages;

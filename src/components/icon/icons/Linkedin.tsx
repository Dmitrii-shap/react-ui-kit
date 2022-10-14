import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgLinkedin: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M4.21 7.984h2.697V16H4.21V7.984ZM5.564 4c.309 0 .611.085.868.244.257.158.458.384.576.648.119.264.15.555.09.835-.061.28-.21.538-.429.74-.218.203-.497.34-.8.396a1.683 1.683 0 0 1-.904-.082 1.544 1.544 0 0 1-.701-.532A1.369 1.369 0 0 1 4 5.444c0-.383.165-.75.459-1.021.293-.271.69-.424 1.105-.424ZM8.6 7.984h2.582v1.1h.035c.36-.631 1.237-1.293 2.55-1.293C16.494 7.79 17 9.449 17 11.608V16h-2.691v-3.896c0-.931-.015-2.127-1.398-2.127-1.404 0-1.614 1.015-1.614 2.057V16H8.606V7.985H8.6Z"
            fill="inherit"
        />
    </svg>
);
export default SvgLinkedin;

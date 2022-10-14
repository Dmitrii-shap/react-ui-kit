import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgAlertCircle: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm1-12v4H9V6h2Zm0 6v2H9v-2h2Z"
            fill="inherit"
        />
    </svg>
);
export default SvgAlertCircle;

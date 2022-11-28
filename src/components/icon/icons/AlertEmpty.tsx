import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgAlertEmpty: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M2.453 17.15h15.094L10 3.734 2.453 17.15Zm-2.194.434 9-16h1.482l9 16-.74 1.266H1l-.742-1.267Z"
            fill="inherit"
        />
        <path fillRule="evenodd" clipRule="evenodd" d="M9 12.5h2V8H9v4.5ZM9 16h2v-2H9v2Z" fill="inherit" />
    </svg>
);
export default SvgAlertEmpty;

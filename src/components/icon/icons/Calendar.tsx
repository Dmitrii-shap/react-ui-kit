import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgCalendar: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M14.5 1.75V1H13v.75H7V1H5.5v.75H1V19h18V1.75h-4.5Zm-9 1.5V4H7v-.75h6V4h1.5v-.75h3V5.5h-15V3.25h3Zm-3 14.25V7h15v10.5h-15Zm.75-9h1.5V10h-1.5V8.5Zm3 0h1.5V10h-1.5V8.5Zm3 0h1.5V10h-1.5V8.5Zm3 0h1.5V10h-1.5V8.5Zm3 0h1.5V10h-1.5V8.5Zm-12 3h1.5V13h-1.5v-1.5Zm3 0h1.5V13h-1.5v-1.5Zm3 0h1.5V13h-1.5v-1.5Zm3 0h1.5V13h-1.5v-1.5Zm3 0h1.5V13h-1.5v-1.5Zm-12 3h1.5V16h-1.5v-1.5Zm3 0h1.5V16h-1.5v-1.5Zm3 0h1.5V16h-1.5v-1.5Z"
            fill="inherit"
        />
    </svg>
);
export default SvgCalendar;

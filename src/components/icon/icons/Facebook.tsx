import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgFacebook: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M17 10a7 7 0 1 0-8.094 6.915v-4.892H7.13V10h1.777V8.458c0-1.755 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.869 0-1.14.54-1.14 1.093V10h1.941l-.31 2.023h-1.631v4.892A7.002 7.002 0 0 0 17 10Z"
            fill="inherit"
        />
    </svg>
);
export default SvgFacebook;

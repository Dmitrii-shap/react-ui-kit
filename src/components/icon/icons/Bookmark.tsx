import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgBookmark: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M17.512 2H3v17l7.256-4.354L17.512 19V2Zm-5.91 5.029L10.256 4.3 8.91 7.029l-3.008.44L8.08 9.593l-.514 2.999 2.69-1.416 2.692 1.416-.514-3 2.176-2.125-3.008-.44Z"
            fill="inherit"
        />
    </svg>
);
export default SvgBookmark;

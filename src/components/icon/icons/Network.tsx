import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgNetwork: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M18.5 16.375V10H10v6.375h2.125v.708h-.708V18.5h5.666v-1.417h-.708v-.708H18.5Zm-7.083-4.958h5.666v3.541h-5.666v-3.541Zm3.541 5.666h-1.416v-.708h1.416v.708Zm-11.333-8.5h-.708V10h5.666V8.583h-.708v-.708H10V1.5H1.5v6.375h2.125v.708Zm2.833 0H5.042v-.708h1.416v.708ZM2.917 2.917h5.666v3.541H2.917V2.917ZM5.75 12.96v-2.253H4.333v2.253a2.125 2.125 0 1 0 2.706 2.706h2.253V14.25H7.039a2.125 2.125 0 0 0-1.289-1.29Zm-.708 2.706a.708.708 0 1 1 0-1.417.708.708 0 0 1 0 1.417Zm9.208-8.628v2.253h1.417V7.039a2.125 2.125 0 1 0-2.706-2.706h-2.253V5.75h2.253a2.125 2.125 0 0 0 1.289 1.29Zm.708-2.706a.708.708 0 1 1 0 1.417.708.708 0 0 1 0-1.417Z"
            fill="inherit"
        />
    </svg>
);
export default SvgNetwork;

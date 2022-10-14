import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgVk: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M3.984 3.984C3 4.968 3 6.552 3 9.72v.56c0 3.168 0 4.752.984 5.736S6.552 17 9.72 17h.56c3.168 0 4.752 0 5.736-.984S17 13.448 17 10.28v-.56c0-3.168 0-4.752-.984-5.736S13.448 3 10.28 3h-.56c-3.168 0-4.752 0-5.736.984Zm1.379 3.274c.075 3.64 1.895 5.828 5.086 5.828h.181v-2.083c1.173.117 2.06.974 2.415 2.083h1.657c-.455-1.657-1.651-2.573-2.398-2.923.747-.431 1.797-1.481 2.048-2.905h-1.505c-.327 1.155-1.295 2.205-2.217 2.305V7.258H9.125v4.037c-.933-.233-2.112-1.365-2.164-4.037H5.363Z"
            fill="inherit"
        />
    </svg>
);
export default SvgVk;

import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgNotification: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M6.873 8.125A3.129 3.129 0 0 1 9.998 5V3.75a4.38 4.38 0 0 0-4.375 4.375h1.25ZM2.417 16.25l1.956-2.936V8.125a5.631 5.631 0 0 1 4.469-5.502l.051-.01c.076-.017.158-.013.235-.025a5.564 5.564 0 0 1 1.74 0c.076.012.159.008.234.025l.274.077c2.433.619 4.247 2.81 4.247 5.435v5.189l1.956 2.936H2.417Zm5.82 1.25h3.52a1.872 1.872 0 0 1-1.76 1.25 1.872 1.872 0 0 1-1.76-1.25Zm8.636-4.564V8.125c0-3.152-2.137-5.81-5.037-6.619A1.877 1.877 0 0 0 9.998 0C9.09 0 8.332.65 8.161 1.506c-2.9.809-5.038 3.466-5.038 6.619v4.811L.988 16.14a.873.873 0 0 0 .728 1.361h5.22A3.129 3.129 0 0 0 9.999 20a3.129 3.129 0 0 0 3.061-2.5h5.222a.875.875 0 0 0 .727-1.36l-2.135-3.204Z"
            fill="inherit"
        />
    </svg>
);
export default SvgNotification;

import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgBookEmpty: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M10 4.251c-3.459-2.47-8-.52-8-.52v12.805s4.452-1.379 7.63.453l.021.011h.698l.02-.011c3.18-1.832 7.631-.453 7.631-.453V3.732s-4.541-1.952-8 .52Zm-.422 11.4c-3.062-1.742-6.437-.68-6.437-.68V4.652s3.31-1.379 6.437.649v10.35Zm7.281-.68s-3.375-1.062-6.437.68V5.3c3.126-2.028 6.437-.649 6.437-.649v10.32Z"
            fill="inherit"
            stroke="inherit"
            strokeWidth={0.7}
        />
    </svg>
);
export default SvgBookEmpty;

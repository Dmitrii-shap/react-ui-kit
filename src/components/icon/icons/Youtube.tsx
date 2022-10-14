import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgYoutube: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M17.352 7.157s-.147-.982-.596-1.41c-.57-.567-1.21-.57-1.503-.603C13.154 5 10.006 5 10.006 5h-.01S6.85 5 4.75 5.144c-.293.033-.932.035-1.503.602-.449.432-.596 1.411-.596 1.411a20.402 20.402 0 0 0-.15 2.301v1.08c.007.768.057 1.536.15 2.3 0 0 .146.982.596 1.411.571.566 1.322.549 1.654.608C6.1 14.966 10 15 10 15s3.152-.005 5.251-.149c.293-.033.932-.036 1.503-.602.449-.431.596-1.41.596-1.41.093-.765.143-1.533.15-2.302V9.458a20.38 20.38 0 0 0-.148-2.3Zm-8.899 4.688V7.85l4.053 2.004-4.053 1.99Z"
            fill="inherit"
        />
    </svg>
);
export default SvgYoutube;

import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgKey: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M3 7.74a4.74 4.74 0 1 1 9.314 1.251l-.167.611.482.412L17 13.754V16h-2.846v-2.42h-2.466V12.25l-.418-.299-.074-.053-.525-.377-.56.324A4.74 4.74 0 0 1 3 7.74Zm4.74 6.74c.677 0 1.33-.1 1.947-.285v1.385h2.467V18H19V12.834l-.35-.3-4.266-3.65A6.74 6.74 0 1 0 7.74 14.48ZM6.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            fill="inherit"
        />
    </svg>
);
export default SvgKey;

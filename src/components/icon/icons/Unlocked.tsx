import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgUnlocked: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M4.667 10H18v9H2v-9h2.667ZM10 12.571c-.736 0-1.333.576-1.333 1.286v1.286c0 .71.597 1.286 1.333 1.286s1.333-.576 1.333-1.286v-1.286c0-.71-.597-1.286-1.333-1.286Z"
            fill="inherit"
        />
        <path
            d="M11 3H9a2 2 0 0 0-2 2v9H5V5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v2h-2V5a2 2 0 0 0-2-2Z"
            fill="inherit"
        />
    </svg>
);
export default SvgUnlocked;

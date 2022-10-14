import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgBankCard: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M2.5 3.5a1 1 0 0 0-1 1v10.75a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1V4.5a1 1 0 0 0-1-1h-15Zm14.583 1.417v1.416H2.917V4.917h14.166ZM2.917 14.833V8.458h14.166v6.375H2.917ZM4.333 12h6.375v1.417H4.333V12Z"
            fill="inherit"
        />
    </svg>
);
export default SvgBankCard;

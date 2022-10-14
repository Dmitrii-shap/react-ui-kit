import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgHome: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M10.392.85H9.306L.593 8.808 1.76 9.977l1.202-1.092v8.504l.762.761H7.89l.762-.761v-4.627h2.394v4.627l.761.761h4.166l.761-.761V8.874l1.216 1.103 1.168-1.169L10.392.85ZM4.61 7.388 9.85 2.631l5.238 4.75v9.122h-2.394v-4.627l-.762-.761H7.766l-.761.761v4.627H4.61V7.388Z"
            fill="inherit"
        />
    </svg>
);
export default SvgHome;

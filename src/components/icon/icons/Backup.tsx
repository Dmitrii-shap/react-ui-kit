import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgBackup: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M10.75 4.75v4.5h3v1.5h-4.5v-6h1.5Zm-7.965 7.275a9.4 9.4 0 0 1-.158-.66.75.75 0 1 0-1.477.255c.047.27.11.539.188.803a.75.75 0 0 0 .75.54c.067.01.135.01.202 0a.75.75 0 0 0 .495-.938Zm3.18 4.29a6.093 6.093 0 0 1-.555-.39.75.75 0 1 0-.93 1.178c.214.169.437.326.668.472a.75.75 0 1 0 .818-1.26Zm-2.362-2.422a.752.752 0 1 0-1.283.787c.143.233.293.458.458.675a.75.75 0 0 0 .6.3.75.75 0 0 0 .45-.142.75.75 0 0 0 .15-1.05 5.75 5.75 0 0 1-.375-.57Zm4.867 3.45a6.585 6.585 0 0 1-.66-.173.753.753 0 1 0-.443 1.44c.263.075.525.143.795.203h.15a.75.75 0 0 0 .75-.6.75.75 0 0 0-.562-.87h-.03ZM10 1a8.918 8.918 0 0 0-7.5 4.043V3.25H1v4.5h4.5v-1.5H3.513A7.5 7.5 0 1 1 10 17.5V19a9 9 0 0 0 0-18Z"
            fill="inherit"
        />
    </svg>
);
export default SvgBackup;

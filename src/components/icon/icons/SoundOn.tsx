import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgSoundOn: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M5.825 6.7H1.7v6.765h4.125l4.468 4.95h1.204V10h-.003.003V1.75h-1.203L5.824 6.7Zm12.689 3.134a8.909 8.909 0 0 0-2.518-6.163l-1.107 1.08a7.362 7.362 0 0 1 2.078 5.093c0 1.9-.741 3.717-2.06 5.068l1.107 1.08a8.803 8.803 0 0 0 2.5-6.151v-.007Zm-3.03-.18a4.72 4.72 0 0 0-1.334-3.263l-1.107 1.08c.566.58.887 1.362.895 2.193a3.12 3.12 0 0 1-.886 2.178l1.107 1.081a4.668 4.668 0 0 0 1.326-3.262v-.006Z"
            fill="inherit"
        />
    </svg>
);
export default SvgSoundOn;

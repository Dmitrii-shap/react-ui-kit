import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgInfoQuestion: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0 1.5a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
            fill="inherit"
        />
        <path
            d="M9.05 12.336h1.484v-.627c0-1.833 2.766-2.093 2.766-4.613C13.3 5.4 11.8 4.3 10.034 4.3c-1.703 0-2.734.978-2.734.978l.844 1.054s.796-.642 1.78-.642c1.032 0 1.782.657 1.782 1.513 0 1.757-2.656 2.093-2.656 4.415v.718ZM9.019 15.3h1.546v-1.482H9.02V15.3Z"
            fill="inherit"
        />
    </svg>
);
export default SvgInfoQuestion;

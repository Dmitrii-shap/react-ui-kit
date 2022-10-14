import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgLink: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="m9.113 13.783 1.238 1.234-.878.876a3.799 3.799 0 0 1-3.663.978 3.786 3.786 0 0 1-2.68-2.673 3.774 3.774 0 0 1 .98-3.653l2.318-2.293a3.808 3.808 0 0 1 5.362 0l.29.298-1.212 1.19-.298-.289a2.022 2.022 0 0 0-2.87 0l-2.352 2.346a2.026 2.026 0 0 0 .009 2.87 2.04 2.04 0 0 0 2.878-.008l.878-.876Zm6.828-9.679a3.808 3.808 0 0 0-5.362 0l-.878.875 1.167 1.243.878-.875a2.064 2.064 0 0 1 3.447.92 2.05 2.05 0 0 1-.533 1.985l-2.352 2.346a2.021 2.021 0 0 1-2.87 0l-.325-.333L7.876 11.5l.29.298a3.808 3.808 0 0 0 5.362 0L15.88 9.45a3.782 3.782 0 0 0 .026-5.347h.035Z"
            fill="inherit"
        />
    </svg>
);
export default SvgLink;

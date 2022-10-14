import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgUserGroup: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M1.718 12.921v-.013c0-.945.718-1.658 1.67-1.658H9.113c.951 0 1.824.713 1.824 1.658l.498 3.342H1.25l.468-3.329Z"
            fill="inherit"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.646 9.148a2.71 2.71 0 0 1-2.72-2.7c0-1.49 1.218-2.698 2.72-2.698 1.502 0 2.72 1.209 2.72 2.698a2.71 2.71 0 0 1-2.72 2.7Zm-4.438 2.884v-.015c0-.211.03-.413.087-.598h.094c.911 0 1.599.707 1.599 1.644l.002.026.343 2.536H8.75l.458-3.593Zm.576-1.4.054-.007c1.246 0 2.13 1.29 2.131 2.416l.358 2.584h6.215l-.455-3.58-.002-.028c0-1.02-.703-1.79-1.634-1.79H10.843c-.41 0-.777.15-1.059.405Z"
            fill="inherit"
        />
        <path
            d="M6.25 10a2.5 2.5 0 1 1 .001-5 2.5 2.5 0 0 1-.001 5Z"
            fill="inherit"
        />
    </svg>
);
export default SvgUserGroup;

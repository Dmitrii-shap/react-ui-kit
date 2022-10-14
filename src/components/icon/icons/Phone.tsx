import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgPhone: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M5 2.04v15.92c0 .58.448 1.04 1.014 1.04h7.972c.566 0 1.014-.46 1.014-1.04V2.04C15 1.484 14.552 1 13.986 1H6.014C5.472 1 5 1.46 5 2.04Zm5.85 14.976a.831.831 0 0 1-.826.847.851.851 0 0 1-.85-.847c0-.484.378-.847.85-.847.448 0 .825.387.825.847Zm2.83-13.258v11.299H6.296V3.758h7.382ZM11.131 2.04c.189 0 .33.145.33.339a.327.327 0 0 1-.33.339H8.844a.327.327 0 0 1-.33-.339c0-.194.142-.339.33-.339h2.288Z"
            fill="inherit"
        />
    </svg>
);
export default SvgPhone;

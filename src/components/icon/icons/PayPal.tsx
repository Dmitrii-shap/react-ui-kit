import * as React from 'react';
import { FC, SVGAttributes } from 'react';
const SvgPayPal: FC<SVGAttributes<SVGElement>> = (props) => (
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
            d="M15.353 5.63c-.267 2.475-2.605 4.364-5.4 4.368h-2.98c-.181 0-.335.12-.358.282l-1.008 7.153v.017l-.222 1.181a.3.3 0 0 0 .081.261.382.382 0 0 0 .276.113h3.573c.181 0 .335-.12.358-.281l.646-4.582c.023-.161.177-.282.358-.282h3.618c1.289 0 2.52-.47 3.406-1.298.886-.828 1.357-1.945 1.293-3.086-.122-1.857-1.605-3.425-3.64-3.847Z"
            fill="inherit"
        />
        <path
            d="m4.928 17.071.968-6.872c.068-.482.53-.844 1.077-.844h2.98c2.447-.004 4.482-1.672 4.686-3.838a6.417 6.417 0 0 0-.489-.02H7.7c-.185 0-.338.12-.357.285L6.995 8.45c-.022.177-.203.302-.402.282-.2-.02-.34-.181-.317-.358l.348-2.669c.064-.486.53-.852 1.077-.852h6.445c.163 0 .325.008.488.02C14.454 2.692 12.414 1 9.95.996h-6.59c-.186 0-.34.12-.357.285L.998 16.714a.292.292 0 0 0 .09.249.385.385 0 0 0 .272.108h3.568Z"
            fill="inherit"
        />
    </svg>
);
export default SvgPayPal;

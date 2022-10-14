import { css } from 'styled-components';

export const disabledStateMixin = css`
    opacity: 0.3;
    pointer-events: none;
`;

export const activeStateMixin = css`
    opacity: 1;
    pointer-events: auto;
`;

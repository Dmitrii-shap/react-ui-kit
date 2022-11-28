import styled, { css } from 'styled-components';
import { ModalVerticalPosition } from '../models';

const verticalPositionTop = css`
    align-items: flex-start;
    margin-top: 40px;
`;

const verticalPositionCenter = css`
    align-items: center;
`;

const getVerticalPositionStyles = (pos?: ModalVerticalPosition) => {
    switch (pos) {
        case 'center':
            return verticalPositionCenter;
        case 'top':
        default:
            return verticalPositionTop;
    }
};

export const StyledModalWrap = styled.div<{ verticalPosition?: ModalVerticalPosition }>`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    z-index: -1;

    ${({ theme }) => theme.breakpoints.down('xs')} {
        padding: 30px 0;
    }

    ${({ verticalPosition }) => getVerticalPositionStyles(verticalPosition)}
`;

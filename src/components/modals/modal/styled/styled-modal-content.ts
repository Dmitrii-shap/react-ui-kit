import styled from 'styled-components';
import { ModalSize, StyledModalContentProps } from '../models';

export const StyledModalContent = styled.div<StyledModalContentProps>`
  margin: 0 auto;
  width: 100%;
  position: relative;
  background-color: ${({theme}) => theme.palette.white};
  max-width: ${({size}) => getModalSize(size)}px;
  max-height: 95%;
  overflow: hidden;
  box-shadow: ${({theme}) => theme.shadow.gray.main};
  display: flex;
  flex-direction: column;
`

const getModalSize = (size: ModalSize): number => {
    switch (size) {
        case 'xs':
            return 568;
        case 'sm':
            return 768;
        case 'md':
            return 1024;
        case 'lg':
            return 1280;
    }
}

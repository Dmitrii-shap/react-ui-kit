import styled from 'styled-components';

export const StyledModalWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;

  ${({theme}) => theme.breakpoints.down('xs')} {
    padding: 30px 0;
  }
`

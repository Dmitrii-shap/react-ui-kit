import styled from 'styled-components';

export const StyledModalWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 30px;
  
  ${({theme}) => theme.breakpoints.down('xs')} {
    padding: 30px 0;
  }
`

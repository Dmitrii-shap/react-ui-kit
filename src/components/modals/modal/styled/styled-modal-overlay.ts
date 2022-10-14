import styled from 'styled-components';
import chroma from 'chroma-js';

export const StyledModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: ${({theme}) => chroma(theme.palette.gray['100']).alpha(0.8).hex()};
`

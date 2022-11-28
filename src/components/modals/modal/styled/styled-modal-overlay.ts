import styled from 'styled-components';
import chroma from 'chroma-js';
import { motion } from 'framer-motion';

export const StyledModalOverlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => chroma(theme.palette.gray['100']).alpha(0.8).hex()};
`;

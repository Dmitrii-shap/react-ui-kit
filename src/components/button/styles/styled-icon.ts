import styled from 'styled-components';
import { Icon } from '../../icon/Icon';

interface AS {
    side: 'right' | 'left';
}

export const StyledButtonIcon = styled(Icon)<AS>`
  margin-right: ${({ side }) => side === 'left' ? '8px' : 0};
  margin-left: ${({ side }) => side === 'right' ? '8px' : 0};
`;

import styled from 'styled-components';
import { Icon } from '../../icon/Icon';
import { StyledButtonIconProps } from '../models';

export const StyledButtonIcon = styled(Icon)<StyledButtonIconProps>`
  margin-right: ${({ side }) => side === 'left' ? '8px' : 0};
  margin-left: ${({ side }) => side === 'right' ? '8px' : 0};
`;

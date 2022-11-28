import React, { FC } from 'react';
import { IconProps } from './models';
import * as Icons from './icons';
import { StyledIcon } from './styled/styled-icon';

export const Icon: FC<IconProps> = ({ name, color = 'inherit', size, ...props }) => {
    const TagName = Icons[name] ?? (() => null);

    return (
        <StyledIcon color={color}>
            <TagName
                width={size ? size * 10 : '100%'}
                height={size ? size * 10 : '100%'}
                {...props}
                fill="inherit"
                role="img"
            />
        </StyledIcon>
    );
};

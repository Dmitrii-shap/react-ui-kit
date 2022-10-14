import React, { FC, PropsWithChildren } from 'react';
import { IconNames } from '../icon/models';
import { ButtonProps } from './models';
import { StyledButton } from './styles';
import { StyledButtonIcon } from './styles/styled-icon';

/**
 * Button UI component
 */
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    type = 'button',
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    disabled = false,
    leftIcon,
    rightIcon,
    children,
    iconSize= 2,
    ...rest
}) => (
    <StyledButton
        type={type}
        size={size}
        variant={variant}
        color={color}
        disabled={disabled}
        {...rest}
    >
        <>
            {leftIcon && <StyledButtonIcon side="left" size={iconSize} name={leftIcon as IconNames} />}
            <span>{children}</span>
            {rightIcon && <StyledButtonIcon side="right" size={iconSize} name={rightIcon as IconNames} />}
        </>
    </StyledButton>
);


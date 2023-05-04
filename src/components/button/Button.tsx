import React, { ComponentPropsWithoutRef, PropsWithChildren, ElementType } from 'react';
import { ButtonPropsWithAs } from './models';
import { StyledButton, StyledButtonIcon } from './styles';

/**
 * Button UI component
 */
export const Button = <T extends ElementType>({
    type = 'button',
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    disabled = false,
    leftIcon,
    rightIcon,
    children,
    iconSize = 2,
    ...rest
}: PropsWithChildren<ButtonPropsWithAs<T>> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonPropsWithAs<T>>) => (
    <StyledButton type={type} size={size} variant={variant} color={color} disabled={disabled} {...rest}>
        <>
            {leftIcon && <StyledButtonIcon side="left" size={iconSize} name={leftIcon} />}
            <span>{children}</span>
            {rightIcon && <StyledButtonIcon side="right" size={iconSize} name={rightIcon} />}
        </>
    </StyledButton>
);

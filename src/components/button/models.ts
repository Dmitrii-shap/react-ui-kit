import { ButtonHTMLAttributes, ComponentType, HTMLAttributeAnchorTarget } from 'react';
import { IconNames, IconSize } from '../icon/models';

export type ButtonVariant = 'contained' | 'outlined' | 'text';
export type ButtonColors = 'primary' | 'primary-contrast' | 'secondary' | 'warning' | 'error';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Is this the principal call to action on the page?
     */
    variant?: ButtonVariant;

    /**
     * What background color to use
     */
    color?: ButtonColors;

    /**
     * How large should the button be?
     */
    size?: ButtonSize;

    /**
     * Left icon name or react component
     */
    leftIcon?: IconNames;

    /**
     * Right icon name or react component
     */
    rightIcon?: IconNames;

    /**
     * icons size
     */
    iconSize?: IconSize;

    /**
     * Associate components
     */
    as?: ComponentType<any> | keyof JSX.IntrinsicElements;

    /**
     * for as='a'
     */
    href?: string;

    /**
     * for as='a'
     */
    target?: HTMLAttributeAnchorTarget;

    /**
     * for as={Link} (react-route-link)
     */
    to?: string;
}

type ButtonPropsWithDefaultsValue = Pick<ButtonProps, 'type' | 'variant' | 'color' | 'size' | 'disabled'>;

export type StyledButtonProps = Omit<ButtonProps, keyof ButtonPropsWithDefaultsValue> &
    Required<ButtonPropsWithDefaultsValue>;

export interface StyledButtonIconProps {
    side: 'right' | 'left';
}

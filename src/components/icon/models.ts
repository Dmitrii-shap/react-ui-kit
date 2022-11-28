import { HTMLAttributes } from 'react';
import * as Icons from './icons';

export type IconNames = keyof typeof Icons;
export type IconSize = number;
export type IconColors = 'primary' | 'error' | 'gray' | 'white' | 'black' | 'warning' | 'blue' | 'inherit';

export interface IconProps {
    name: IconNames;
    size?: IconSize;
    color?: IconColors;
    width?: number;
    height?: number;
}

export interface StyledProps extends HTMLAttributes<SVGElement> {
    color: IconColors;
}

import { ReactNode } from 'react';

type VerticalPosition = 'top' | 'bottom';
type HorizontalPosition = 'left' | 'right';
type ManagerAlign = [VerticalPosition, HorizontalPosition];

export interface AlertManagerProps {
    positions?: ManagerAlign;
    defaultShowClose?: boolean;
    defaultTimer?: number;
}

export type StyledAlertManagerProps = {
    positions: ManagerAlign;
};

export type AlertTypes = 'info' | 'error' | 'warning' | 'success';

export interface AlertConfig {
    children: ReactNode;
    color?: AlertTypes;
    showClose?: boolean;
    timer?: number;
    id?: string;
    onClose?: () => void;
}

export type AlertFullConfig = Optional<Required<AlertConfig>, 'onClose'>;

export type AlertProps = Required<Omit<AlertConfig, 'timer'>> & {
    align: HorizontalPosition;
};

export interface StyledAlertProps {
    color: AlertTypes;
}

export interface StyledAlertCloseProps {
    color: AlertTypes;
}

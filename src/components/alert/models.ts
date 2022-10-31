import { ReactNode} from 'react';

type ManagerAlign = ['top' | 'bottom', 'left' | 'right'];

export interface AlertManagerProps {
    defaultTimer?: number;
    positions?: ManagerAlign;
}

export type StyledAlertManagerProps = {
    positions: ManagerAlign;
};

export type AlertTypes = 'info' | 'error' | 'warning' | 'success';
export interface AlertProps {
    children: ReactNode;
    color?: AlertTypes;
}
export type AlertStyledProps = Required<AlertProps>;

import { PropsWithChildren, ReactNode } from 'react';

export type ModalElement = {
    open: () => void;
    close: () => void;
};

export type ModalSize = 'xs' | 'sm' | 'md' | 'lg';

export type ModalProps = PropsWithChildren<{
    showClose?: boolean;
    outsideClose?: boolean;
    defaultOpened?: boolean;
} & ModalContentProps>;

export interface ModalHeaderProps {
    title: ReactNode;
}

export interface ModalContentProps {
    size?: ModalSize;
}

export type StyledModalContentProps = Required<ModalContentProps>;

export type ModalActionsAlign = 'center' | 'left' | 'right' | 'space-between';
export interface ModalActionsProps {
    align?: ModalActionsAlign;
}

export type StyledModalActionsProps = Required<ModalActionsProps>;

export interface StyledModalProps {
    index: number;
}

export interface StyledModalCloseProps {
    outsideClose: boolean;
    onClick: () => void;
}

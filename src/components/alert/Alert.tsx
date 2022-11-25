import React, { FC } from 'react';
import { AlertProps } from './models';
import { StyledAlert, StyledAlertClose } from './styles';
import { Icon } from '../icon/Icon';
import { animationLeftAlert, animationRightAlert, animationTransition } from './contants/animations';

const Alert: FC<AlertProps> = ({ children, align, onClose, showClose, ...props }) => {
    const { color } = props;

    return (
        <StyledAlert
            {...props}
            variants={align === 'right' ? animationRightAlert : animationLeftAlert}
            transition={animationTransition}
            initial='initial'
            animate='animate'
            exit='initial'
        >
            {showClose && (
                <StyledAlertClose color={color} onClick={onClose}>
                    <Icon name='Cross' color='inherit' />
                </StyledAlertClose>
            )}
            {children}
        </StyledAlert>
    );
};

export default Alert;

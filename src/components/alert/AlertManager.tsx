import React, { FC, PropsWithChildren, useRef, useState } from 'react';
import AlertContext from './Context';
import { StyledAlertContainer } from './styles/styled-alert-container';
import { AlertManagerProps, AlertProps } from './models';
import { StyledAlert } from './styles/styled-alert';

export const AlertManager: FC<PropsWithChildren<AlertManagerProps>> = ({ children, positions = ['bottom', 'right'], defaultTimer = 10000 }) => {
    const [alerts, setAlerts] = useState<AlertProps[]>([]);

    const add = (config: AlertProps) => {
        setAlerts((currentAlerts) => [...currentAlerts, config]);

        setTimeout(() => {
            setAlerts((currentAlerts) => [...currentAlerts.filter((item) => item !== config)]);
        }, defaultTimer);
    };

    const alertContext = useRef({
        add,
    });

    return (
        <AlertContext.Provider value={alertContext}>
            {children}
            <StyledAlertContainer positions={positions}>
                {alerts.map((props, index) => (
                    <StyledAlert key={index} {...props} color={props.color || 'info'} />
                ))}
            </StyledAlertContainer>
        </AlertContext.Provider>
    );
};

export default AlertManager;

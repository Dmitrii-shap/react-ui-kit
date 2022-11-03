import React, { FC, PropsWithChildren, useRef, useState } from 'react';
import AlertContext from './Context';
import { StyledAlert, StyledAlertContainer } from './styles';
import { AlertManagerProps, AlertProps, AlertStyledProps } from './models';

const AlertManager: FC<PropsWithChildren<AlertManagerProps>> = ({ children, positions = ['bottom', 'right'], defaultTimer = 10000 }) => {
    const [alerts, setAlerts] = useState<AlertStyledProps[]>([]);

    const add = (config: AlertProps) => {
        const conf: AlertStyledProps = { color: 'info', ...config };
        setAlerts((currentAlerts) => [...currentAlerts, conf]);

        setTimeout(() => {
            setAlerts((currentAlerts) => [...currentAlerts.filter((item) => item !== conf)]);
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
                    <StyledAlert key={index} {...props} />
                ))}
            </StyledAlertContainer>
        </AlertContext.Provider>
    );
};

export default AlertManager;

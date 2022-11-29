import React, { FC, PropsWithChildren, useRef, useState, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import AlertContext from './Context';
import { StyledAlertContainer } from './styles';
import { AlertManagerProps, AlertConfig, AlertFullConfig } from './models';
import { generateId } from '../../utils';
import Alert from './Alert';

const AlertManager: FC<PropsWithChildren<AlertManagerProps>> = (props) => {
    const { children, positions = ['bottom', 'right'], defaultShowClose = true, defaultTimer = 10000 } = props;
    const timerIdsRef = useRef([] as NodeJS.Timeout[]);
    const [alerts, setAlerts] = useState<AlertFullConfig[]>([]);

    useEffect(() => {
        return () => {
            timerIdsRef.current.forEach(clearTimeout);
        };
    }, []);

    const add = useCallback(
        (config: AlertConfig) => {
            const alertConfig: AlertFullConfig = {
                color: 'info',
                timer: defaultTimer,
                id: generateId(),
                showClose: defaultShowClose,
                ...config,
            };

            setAlerts((currentAlerts) => [...currentAlerts, alertConfig]);

            const timeoutId = setTimeout(() => {
                close(alertConfig.id);
            }, alertConfig.timer);

            timerIdsRef.current.push(timeoutId);
        },
        [defaultTimer]
    );

    const close = useCallback((id: string) => {
        setAlerts((currentAlerts) => {
            const index = currentAlerts.findIndex((item) => item.id === id);
            if (index === -1) {
                return currentAlerts;
            }

            const timerIds = timerIdsRef.current;
            clearTimeout(timerIds[index]);
            timerIds.splice(index, 1);

            const callbackFn = currentAlerts[index].onClose;
            callbackFn && callbackFn();

            return currentAlerts.filter((item) => item.id !== id);
        });
    }, []);

    const alertContext = useRef({
        add,
        close,
    });

    return (
        <AlertContext.Provider value={alertContext}>
            {children}
            <StyledAlertContainer positions={positions}>
                <AnimatePresence>
                    {alerts.map((props) => (
                        <Alert key={props.id} align={positions[1]} {...props} onClose={() => close(props.id)}>
                            {props.children}
                        </Alert>
                    ))}
                </AnimatePresence>
            </StyledAlertContainer>
        </AlertContext.Provider>
    );
};

export default AlertManager;

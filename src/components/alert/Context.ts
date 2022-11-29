import { createContext, MutableRefObject } from 'react';
import { AlertConfig } from './models';

type AlertState = MutableRefObject<{
    add: (config: AlertConfig) => void;
    close: (id: string) => void;
}>;

const AlertContext = createContext<AlertState>({} as AlertState);

export default AlertContext;

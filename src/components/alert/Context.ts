import { Context, createContext, MutableRefObject } from 'react';
import { AlertConfig } from './models';

type AlertState = MutableRefObject<{
    add: (config: AlertConfig) => void;
    close: (id: string) => void;
}>;

// @ts-ignore  TODO
const AlertContext: Context<AlertState> = createContext(null);

export default AlertContext;

import { Context, createContext, MutableRefObject } from 'react';
import { AlertProps } from './models';

type AlertState = MutableRefObject<{
    add: (config: AlertProps) => void;
}>;

// @ts-ignore  TODO
const AlertContext: Context<AlertState> = createContext(null);

export default AlertContext;

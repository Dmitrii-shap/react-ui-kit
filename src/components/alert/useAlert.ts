import { useContext } from 'react';
import AlertContext from './Context';

const useAlert = () => {
    const alertContext = useContext(AlertContext);

    return alertContext.current;
};

export default useAlert;

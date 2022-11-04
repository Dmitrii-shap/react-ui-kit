import {useCallback, useState} from 'react';

export const useBoolean = (initial = false) => {
    const [state, setState] = useState(initial);

    const setTrue = useCallback(() => {
        setState(true);
    }, [setState]);

    const setFalse = useCallback(() => {
        setState(false);
    }, [setState]);

    const toggle = useCallback(() => {
        setState(prev => !prev);
    }, [setState]);

    return {state, setTrue, setFalse, toggle};
};

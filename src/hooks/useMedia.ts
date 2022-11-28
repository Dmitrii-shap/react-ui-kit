import { useEffect, useState } from 'react';

interface UseMediaOptions<T> {
    queries: Record<string, T>;
    defaultValue: T;
}

/**
 * @description Возвращает значение по активному медиазапросу. Если не выполняется никакой медиазапрос, будет возвращено defaultValue
 *
 * @example
 * const value = useMedia({
 *     queries: {
 *         [theme.breakpoints.down('xs')]: 'xs'
 *         [theme.breakpoints.up(1023)]: 'sm',
 *     },
 *     defaultValue: 'lg',
 * });
 * */
export const useMedia = <T>({ queries, defaultValue }: UseMediaOptions<T>): T => {
    const mediaQueryLists = Object.keys(queries).map((q) => window.matchMedia(q.replace(/^@media( ?)/m, '')));

    const getValue = () => {
        const index = mediaQueryLists.findIndex(({ matches }) => matches);
        return index > -1 ? Object.values(queries)[index] : defaultValue;
    };

    const [value, setValue] = useState(getValue());

    useEffect(() => {
        const handler = () => setValue(getValue());
        mediaQueryLists.forEach((mql) => mql.addEventListener('change', handler));
        return () => mediaQueryLists.forEach((mql) => mql.removeEventListener('change', handler));
    }, []);

    return value;
};

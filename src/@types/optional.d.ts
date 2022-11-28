/**
 * @desc set optional for input props
 * */
declare type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

/**
 * @desc Exclude parent properties
 * */
export type ExcludeParent<P, C extends P> = Pick<C, Exclude<keyof C, keyof P>>;

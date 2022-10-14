/**
 * @desc Exclude parent properties
 * */
declare type ExcludeParent<P, C extends P> = Pick<C, Exclude<keyof C, keyof P>>;

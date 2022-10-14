/**
 * @desc Constructs a type with all (recursive) properties of Type set to readonly.
 * */
declare type RecursiveReadonly<T extends Record<string, any>> = {
    readonly [P in keyof T]: T[P] extends Record<any, any>
        ? RecursiveReadonly<T[P]>
        : T[P];
};

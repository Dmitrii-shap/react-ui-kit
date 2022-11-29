/**
 * @desc Constructs a type with all (recursive) properties of Type set to optional.
 * */
/* eslint-disable @typescript-eslint/no-explicit-any */
export type RecursiveOptional<T extends Record<string, any>> = {
    [P in keyof T]?: T[P] extends Record<any, any> ? RecursiveOptional<T[P]> : T[P];
};

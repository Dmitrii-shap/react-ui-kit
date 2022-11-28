/**
 * @desc Constructs a type with all (recursive) properties of Type set to optional.
 * */
declare type RecursiveOptional<T extends Record<string, any>> = {
    [P in keyof T]?: T[P] extends Record<any, any> ? RecursiveOptional<T[P]> : T[P];
};

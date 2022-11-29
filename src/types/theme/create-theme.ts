import { DefaultTheme } from 'styled-components';
import { Theme } from './theme';
import { ExcludeParent, RecursiveOptional, RecursiveReadonly } from '../utilityTypes';

/**
 * @desc Internal theme properties that have been expanded in DefaultTheme
 * */
type ExtInternalTheme = {
    [P in keyof Theme as keyof ExcludeParent<Theme[P], DefaultTheme[P]> extends [] ? never : P]: ExcludeParent<
        Theme[P],
        DefaultTheme[P]
    >;
};

/**
 * @desc Internal theme properties that have not been expanded
 * */
type DefaultsInnerTheme = Omit<Theme, keyof ExtInternalTheme>;

/**
 * @desc Theme properties that are not defined in the internal theme
 * */
type OuterTheme = ExcludeParent<Theme, DefaultTheme>;

/**
 * @desc Input where internal theme properties is optional and external is required
 * */
export type CreateThemeInput = OuterTheme & {
    [P in keyof ExtInternalTheme]: Partial<Theme[P]> & ExtInternalTheme[P];
} & {
    [P in keyof DefaultsInnerTheme]?: Partial<Theme[P]>;
};

/**
 * @desc Combined internal theme properties with all extensions
 * */
type ExtendedTheme = OuterTheme & {
    [P in keyof ExtInternalTheme]: Theme[P] & ExtInternalTheme[P];
} & {
    [P in keyof DefaultsInnerTheme]: Theme[P];
};

export type CreateTheme = keyof (OuterTheme & ExtInternalTheme) extends []
    ? (input?: RecursiveReadonly<RecursiveOptional<Theme>>) => DefaultTheme
    : (input: RecursiveReadonly<CreateThemeInput>) => ExtendedTheme;

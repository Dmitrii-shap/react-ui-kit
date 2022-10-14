import { CircularProgressSize } from '../circular-progress/models';

export type LoaderVariant = 'fixed' | 'static';

export interface LoaderProps {
    variant?: LoaderVariant;

    size?: CircularProgressSize;

    width?: number;

    height?: number;
}

type LoaderWithDefaultsValue = Pick<
    LoaderProps,
    'variant'
>;

export type StyledLoaderProps = Omit<
    LoaderProps,
    keyof LoaderWithDefaultsValue
    > &
    Required<LoaderWithDefaultsValue>;


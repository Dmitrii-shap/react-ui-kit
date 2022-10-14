export type CircularProgressColors = 'primary' | 'white' | 'error';
export type CircularProgressSize = 'small' | 'medium' | 'large';

export interface CircularProgressProps {
    /**
    * What spinning ring color to use
    */
    color?: CircularProgressColors;

    /**
     * Size of circular progress
     */
    size?: CircularProgressSize;

    /**
    * Progress value for ring and label
    */
    progressValue?: number;
}

type CircularProgressWithDefaultsValue = Pick<
    CircularProgressProps,
    'size' | 'color'
>;

export type StyledCircularProgressProps = Omit<
    CircularProgressProps,
    keyof CircularProgressWithDefaultsValue
    > &
    Required<CircularProgressWithDefaultsValue>;

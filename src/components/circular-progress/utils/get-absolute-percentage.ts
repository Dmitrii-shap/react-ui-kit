/**
 * @desc Get absolute percentage by progress value.
 * */

export const getAbsolutePercentage = (progressValue: number) => (100 - progressValue) / 100;

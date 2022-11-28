/**
 * @desc Calculate circle circumference by given inputs.
 * */

export const getCircumference = (size: number, thickness: number): number => 2 * Math.PI * ((size - thickness) / 2);

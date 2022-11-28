import { TypographyConfig } from '../../../types/theme';

const defaultTypSetting = {
    fontWeight: 400,
};

export const createTypographyElement = (props: TypographyConfig): TypographyConfig => ({
    ...props,
    lineHeight: props.lineHeight || props.fontSize + 4,
    fontWeight: props.fontWeight || defaultTypSetting.fontWeight,
});

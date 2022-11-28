import styled from 'styled-components';
import { LoaderVariant, StyledLoaderProps } from '../models';
import { variantStaticMixin } from './mixins/variant-static.mixin';
import { variantFixedMixin } from './mixins/variant-fixed-mixin';

export const StyledLoaderContainer = styled.div<StyledLoaderProps>`
    background: ${({ theme }) => theme.palette.white};
    width: ${({ width }) => (width ? `${width}px` : 'initial')};
    height: ${({ height }) => (height ? `${height}px` : 'initial')};
    display: flex;
    justify-content: center;
    align-items: center;

    ${({ variant }) => getVariantMixin(variant)}
`;

const getVariantMixin = (variant: LoaderVariant) => (variant === 'static' ? variantStaticMixin : variantFixedMixin);

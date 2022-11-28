import styled from 'styled-components';

export const StyledContainer = styled.div`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 16px;
    box-sizing: border-box;

    ${({ theme }) => theme.breakpoints.up('xs')} {
        max-width: ${({ theme }) => theme.breakpoints.values.xs}px;
    }

    ${({ theme }) => theme.breakpoints.up('sm')} {
        padding: 0 24px;
        max-width: ${({ theme }) => theme.breakpoints.values.sm}px;
    }

    ${({ theme }) => theme.breakpoints.up('md')} {
        max-width: ${({ theme }) => theme.breakpoints.values.md}px;
        padding: 0 32px;
    }
`;

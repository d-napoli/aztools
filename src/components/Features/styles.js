import styled from 'styled-components';

export const FeaturesContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;

    @media screen and (min-width: 768px) {
        padding: var(--spaceIntoContainers) 0;
    }

    @media screen and (max-width: 768px) {
        margin-top: 40px;
    }
`;

export const Title = styled.h3`
    &:after {
        content: "";
        display: block;
        width: 44px;
        height: 4px;
        background: var(--primary);
        margin: 15px auto 29px;
        border-radius: 2px;
    }

    @media screen and (max-width: 768px) {
        margin-top: 40px;
    }
`;

export const Description = styled.p`
    max-width: 40%;
    margin: 0 auto;
    margin-bottom: 5rem !important;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        margin-bottom: 0 !important;
    }
`;

export const FeaturesWrapper = styled.div`

`;

export const Row = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    text-align: center;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
        &:not(:first-child) {
            margin-top: 4rem;
        }
    }  

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Column = styled.div`
    flex: 33.3%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    text-align: center;
    position: relative;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        flex: 100% !important;
        width: 100% !important;
    }
`;
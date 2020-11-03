import styled from 'styled-components';

export const Container = styled.div`
    position: 'relative';
    display: flex;
    justify-content: space-between;
    margin: 100px auto 0 auto;
    width: 100%;

    align-items: center;
    
    @media screen and (min-width: 768px) {
        /* margin-top: 150px; */
        height: calc(80vh);
    }

    @media screen and (max-width: 768px) {
        /* max-width: 90%; */
        flex-direction: column;
    }
`;

export const OnlyMobile = styled.div`
    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const OnlyDesktop = styled.div`
    width: 50%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const TitleWrapper = styled.div`
    flex: 50%;
`;

export const ImageWrapper = styled.div`
    flex: 50%;
    margin: 0 auto;
    align-items: center;
    text-align: center;
`;

export const Title = styled.h2`
    padding: 40px 0 0 0;
    /* max-width: 90%; */

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Description = styled.p`
    margin-bottom: 3rem !important;

    max-width: 80%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const MainImage = styled.img`
    width: 90%;
    flex-shrink: 0;

    @media screen and (max-width: 768px) {
        width: 60%;
        margin-top: 10px;
    }
`;
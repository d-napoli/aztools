import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--grayBg);
    padding: 30px;
    border-radius: 5px;
    position: relative;
    text-align: center;
    align-items: center;

    width: 100%;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        /* &:not(:first-child) { */
            margin-top: 5em !important;
        /* } */
    }

    &:hover {
        top: -6px;
        transition: 0.3s ease 0s all;
        color: white !important;
        background-color: var(--primary);
        box-shadow: 0 4px 20px -5px rgba(66, 133, 244, 0.4);
        -webkit-box-shadow: 0 4px 20px -5px rgba(66, 133, 244, 0.4);
        -moz-box-shadow: 0 4px 20px -5px rgba(66, 133, 244, 0.4);
    }

    &:hover p {
        color: white !important;
    }

    &:hover div:nth-child(1) div {
        background-color: white !important;
        box-shadow: 0 4px 20px -5px rgba(66, 133, 244, 0.4);
        -webkit-box-shadow: 0 4px 20px -5px rgba(66, 133, 244, 0.4);
        -moz-box-shadow: 0 4px 20px -5px rgba(66, 133, 244, 0.4);
    }

    &:hover div:nth-child(1) div svg path {
        fill: var(--primary) !important;
    }
`;

export const Header = styled.div`
    position: absolute;
    top: -40px;
    left: 50%;

    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
`;

export const IconWrapper = styled.div`
    background-color: var(--primary);
    /* display: flex; */
    /* align-items: center; */
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;

// export const Icon = styled.div`
//     font-size: 2rem;
//     color: white;
//     display: flex;
//     position: relative;
//     width: 100%;
//     margin: 0 auto;
//     text-align: center;
// `;

export const Body = styled.div`
    padding-top: 30px;
`;

export const Title = styled.h4`
    font-size: 18px;
    font-weight: 400;
`;

export const Description = styled.p`
    @media screen and (min-width: 768px) {
        /* width: 90%; */
        margin: 0 auto;
    }
`;

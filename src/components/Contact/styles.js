import styled, { css } from 'styled-components';

export const Container = styled.div`
    padding: 40px 0;
`;

export const Row = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Column = styled.div`
    width: 50%;
    
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Image = styled.img`
    position: relative;
    display: flex;
    width: 100%;
    margin: 0 auto;
`;

export const Header = styled.div`
    text-align: center;
    width: 100%;
    margin-bottom: 20px;
`;

export const Title = styled.h3`

`;

export const Description = styled.p`
    width: 80%;
    text-align: center;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const Body = styled.div`
    @media screen and (min-width: 768px) {
        padding: 0 50px;
    }
`;

export const Input = styled.input`
    border: 0;
    padding: 15px;
    margin: 0 auto;
    font-size: 15px;
    display: flex;
    background-color: var(--grayBg);
    margin-bottom: 10px;
    border-radius: 10px;
    border-bottom: 2px solid var(--grayBg);
    transition: 0.3s ease 0s all;
    width: 100%;

    &:focus {
        border-bottom: 2px solid var(--primary);
    }
`;

export const TextArea = styled.textarea`
    resize: none;
    height: 100px;
    border: 0;
    padding: 15px;
    margin: 0 auto;
    font-size: 15px;
    display: flex;
    background-color: var(--grayBg);
    margin-bottom: 10px;
    border-radius: 10px;
    border-bottom: 2px solid var(--grayBg);
    transition: 0.3s ease 0s all;
    width: 100%;

    &:focus {
        border-bottom: 2px solid var(--primary);
    }
`;

export const ErrorSpan = styled.p`
    color: red;
    font-weight: bold;
    margin: 5px 0;
`;

export const SucessSpan = styled.p`
    color: var(--primary);
    font-weight: bold;
    margin: 5px 0;
`;
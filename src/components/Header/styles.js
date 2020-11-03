import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    /* overflow: hidden; */
    padding: 40px 0;
    display: flex;
    box-shadow: 4px 0 20px -10px rgba(0,0,0,.2);
    -moz-box-shadow: 4px 0 20px -10px rgba(0,0,0,.2);
    -webkit-box-shadow: 4px 0 20px -10px rgba(0,0,0,.2);
    height: 100px;
    background-color: white;

    z-index: 100;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 20px 0;
        height: auto;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    /* flex-shrink: 0; */
`;

export const LinksWrapper = styled.ul`
    display: flex;

    @media screen and (max-width: 768px) {
        display: none;
    }

    & > a.active > p {
        color: var(--primary);
        font-weight: bold;
    }
`;

export const LinksWrapperMobile = styled.ul`
    padding-top: 10px;
    background-color: white;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const NavLink = styled.p`
    padding: 0 20px;
    font-size: 16px;
    font-weight: 500;
    color: black;

    text-decoration: none;

    @media screen and (max-width: 768px) {
        padding: 10px 20px;
        text-align: center;
    }

    /* @media screen and (min-width: 768px) {
        &:after {
            content: "";
            display: block;
            width: 100%;
            height: 2px;
            background: white;
            margin: 0 auto;
            border-radius: 2px;
        }
    } */

    &:hover {
        color: var(--primary);
        cursor: pointer;
        /* font-weight: bold; */

        /* @media screen and (min-width: 768px) {
            &:after {
                content: "";
                display: block;
                width: 100%;
                height: 2px;
                background: var(--primary);
                margin: 0 auto;
                border-radius: 2px;
            }
        } */
    }
`;

export const Ad = styled.div`
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    background-color: var(--primary);

    box-shadow: 4px 0 20px -10px rgba(0,0,0, .5);
    -moz-box-shadow: 4px 0 20px -10px rgba(0,0,0,.5);
    -webkit-box-shadow: 4px 0 20px -10px rgba(0,0,0,.5);
    
    padding: 30px;
    transition: 0.3s ease 0s all;
    border-radius: 5px;

    width: 365px;

    &:hover {
        opacity: .9;
        cursor: pointer;
    }
`;

export const AdBody = styled.div`
    
`;

export const AdHeader = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    align-items: flex-end;
`;

export const AdTitle = styled.h3`
    font-size: 20px;
    color: white;
    text-align: right;
`;

export const AdDescription = styled.p`
    color: white;
    text-align: right;
    word-break: break-all;
`;

export const AdCta = styled.div`

`;

export const Close = styled.button`
    position: relative;
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
`;

export const BackToTop = styled.div`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    color: black;
    background-color: rgba(0, 0, 0, .5);
    transition: 0.3s ease 0s all;
    padding: 15px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
        background-color: rgba(0, 0, 0, .8);
    }

    @media screen and (max-width: 768px) {
        bottom: 1rem;
        right: 1rem;
    }
`;
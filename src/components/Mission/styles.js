import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;

    /* background-color: var(--grayBg); */

    @media screen and (min-width: 768px) {
        padding: var(--spaceIntoContainers) 0;
    }

    @media screen and (max-width: 768px) {
        margin-top: 40px;
        margin-bottom: 40px;
    }
`;

export const Row = styled.div`
    /* width: 70%; */
    margin: 0 auto;

    text-align: center;
    
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        /* width: 90%; */
        flex-direction: column;
    }
`;

export const Column = styled.div`
    width: 33.3%;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin-bottom: 30px;
    }
`;

export const Info = styled.div`
    position: relative;
    width: 100%;

    @media screen and (min-width: 768px) {
        padding: 0 30px;
    }
`;

export const Header = styled.div`
    position: absolute;
    top: -100px;
    left: 50%;

    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
`;

export const Body = styled.div`

`;

export const Description = styled.p`

`;

export const Title = styled.h4`
    /* font-size: 25px; */
    margin-top: 110px;
`;

export const IconWrapper = styled.div`
    background-color: var(--primary);
    /* display: flex; */
    /* align-items: center; */
    width: 90px;
    height: 90px;
    border-radius: 50%;
`;

export const FullColumn = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 60px;
`;

export const SectionTitle = styled.h3`
    margin-bottom: 20px;
`;

export const SubTitle = styled.h4`
    font-size: 25px;

    @media screen and (max-width: 768px) {
        font-size: 20px;    
    }
`;

export const SectionDescription = styled.p`
     &:after {
        content: "";
        display: block;
        width: 44px;
        height: 4px;
        background: var(--primary);
        margin: 15px auto 29px;
        border-radius: 2px;
    }
`;

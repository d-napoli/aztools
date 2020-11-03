import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;

    @media screen and (min-width: 768px) {
        padding: var(--spaceIntoContainers) 0;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 40px 0;
    }

`;

export const LeftSide = styled.div`
    width: 50%;
    display: flex;

    @media screen and (max-width: 768px) {
        width: 100%;    
        margin-bottom: 20px;
    }
`;

export const RightSide = styled.div`
    width: 50%;
    display: flex;
    text-align: left;

    @media screen and (max-width: 768px) {
        width: 100%;    
    }
`;

export const ImageWrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    position: relative;
    display: flex;
`;

export const Image = styled.img`
    width: 80%;
    margin: 0 auto;
`;

export const Heading = styled.div`

`;

export const Title = styled.h3`
    &:after {
        content: "";
        display: block;
        width: 44px;
        height: 4px;
        background: var(--primary);
        margin: 15px 0 29px;
        border-radius: 2px;
    }
`;

export const List = styled.ul`
`;

export const ItemList = styled.li`
    line-height: 4rem;
    display: flex;

    @media screen and (max-width: 768px) {
        line-height: 2.5rem;
    }
`;

export const Description = styled.p`
    margin-bottom: 2rem;
`;

export const IconBox = styled.div`
    display: flex;
    margin-right: 30px;
    position: relative;
`;

export const DesktopOnly = styled.div`
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MobileOnly = styled.div`
    margin-bottom: 20px;

    @media screen and (min-width: 768px) {
        display: none;
    }
`;
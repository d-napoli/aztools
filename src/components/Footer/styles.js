import styled from 'styled-components';

export const Container = styled.div`
    z-index: 1;

    margin: 0 auto;
    position: relative;
    width: 100%;

    box-shadow: -10px -10px 20px -5px rgba(66, 133, 244, 0.3);
    -moz-box-shadow: -10px -10px 20px -5px rgba(66, 133, 244, 0.3);
    -webkit-box-shadow: -10px -10px 20px -5px rgba(66, 133, 244, 0.3);

    background-color: var(--primary);
    padding: 30px 0;
`;

export const Row = styled.div`
    width: 70%;
    margin: 0 auto;
    
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        max-width: 90%;
        flex-direction: column;
    }
`;

export const LeftColumn = styled.div`
    width: 33.3%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const CenterColumn = styled.div`
    text-align: center;
    width: 33.3%;

    @media screen and (max-width: 768px) {
        width: 100%;
        text-align: left;
    }
`;

export const RightColumn = styled.div`
    text-align: center;
    width: 33.3%;

    @media screen and (max-width: 768px) {
        display: none;
        width: 100%;
    }
`;

export const Description = styled.p`
    color: white !important;
    font-weight: 600;
`;

export const CompanyDescription = styled.p`
    color: white !important;
    margin-top: 30px;
`;

export const IconsWrapper = styled.div`
    margin: 30px 0;
    
`;

export const SocialMediaWrapper = styled.div`
    display: flex;
    margin-top: 30px;
`;

export const IconWrapper = styled.div`
    position: relative;
    display: flex;
    margin-right: 20px;
    margin-left: 10px;
`;

export const FooterTitle = styled.h4`
    color: white;
    font-size: 20px;
`;

export const List = styled.ul`

`;

export const ListItem = styled.li`

`;

export const Phone = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 5px;
`;
export const Mail = styled.div`
    position: relative;
    display: flex;
`;

export const LinksWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    /* text-align: left; */

    /* @media screen and (max-width: 768px) {
        display: none;
    } */
`;

export const NavLink = styled.p`
    padding: 0 20px;
    font-size: 16px;
    font-weight: 500;
    color: white;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        margin-left: 5px;
        transition: 0.3s ease 0s all;
    }
`;
import styled from 'styled-components';

export const Container = styled.div`
    max-width: 70%;
    z-index: 1;

    margin: 0 auto;
    position: relative;

    @media screen and (max-width: 768px) {
        max-width: 90%;
        flex-direction: column;
    }
`;
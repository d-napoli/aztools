import styled from 'styled-components';

export const Container = styled.button`
    /* margin-right: 16px; */
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    border: 2px solid #b3b3b3;
    border-radius: 5px;
    cursor: pointer;
    background-color: transparent;

    transition: 0.3s ease 0s all;
    
    > div {
        width: 60%;
        height: 2px;
        background-color: #b3b3b3;
        margin-bottom: 3px;
    }

    &:hover {
        background-color: #f9f9f9;   
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`;
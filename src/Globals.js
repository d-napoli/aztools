import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    p, span, a, li {
        line-height: 1.7;
    }

    p, li {
        font-size: 1rem !important;
        color: var(--gray);
    }

    h2 {
        font-size: 50px;
        font-weight: 700;
    }

    h3 {
        font-size: 40px;
        font-weight: 700;
    }

    @media screen and (max-width: 768px) {
        h2 {
            width: 100%;
            font-size: 40px;
        }

        h3 {
            width: 100%;
            font-size: 30px;
        }

        p {
            font-size: 15px !important;
        }
    }

    h1, h2, h3, h4, h5, h6 { line-height: 1.2; margin-bottom: 0.5rem; }

    body {
        font: 14px 'Roboto', sans-serif;
        /* background: #ecf1f8; */
        background: white;
        color: black;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }

    :root {
        --primary: #4285f4;
        --gray: #6c757d;
        --grayBg: #f1f1f1;
        --spaceIntoContainers: 5rem;
    }
`;
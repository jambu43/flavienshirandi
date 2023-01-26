import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid<<<<< Sans, Helvetica Neue, sans-serif;
        scroll-behavior: smooth;
        background-color: #fff;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
    }
`;
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: black;
        font-family: "League Spartan", sans-serif;
    }

    body {
        background-color: #3a4764;
    }

    @media screen and (min-width: 768px) {
        body {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }


`
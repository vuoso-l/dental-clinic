import { createGlobalStyle } from "styled-components";

import { displayFlex } from "../styleAux/theme";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    main {
        ${displayFlex("flex", "column", "center", "center")};
    }

    img {
    max-width: 100%;
    }

    ul,
    ol {
    list-style-type: none;
    }

    a {
    display: inline-block;
    text-decoration: none;
    color: black;
    }

    h1:first-letter,
    h2:first-letter,
    h3::first-letter,
    p:first-letter {
    text-transform: uppercase;
    }

    
`;

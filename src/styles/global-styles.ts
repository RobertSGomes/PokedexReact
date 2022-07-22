import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        font-family: 'Oxanium', cursive;
    }

    body {
        height: 100vh;
    }

    #root {
        height: 100%;
        
        background-image: linear-gradient(to bottom, lightblue 10%, white 30%, lightgreen 100%);
        overflow-y: auto;
    }

    body, #root {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
    }

    h1 {
        white-space: nowrap;
    }

    .pokemon_data {
        font-weight: 600;
        color: #aaa;
        font-size: clamp(8px, 5vw, 25px);
    }

    .pokemon_name {
        color: #3a444d;
        text-transform: capitalize;
        white-space: nowrap;
    }

    .pokemon_img {
        height: 120px;
    }
`
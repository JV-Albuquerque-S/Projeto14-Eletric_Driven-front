import { createGlobalStyle } from "styled-components";

export const BodyStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    
    body{
        width: 100vw;
        font-family: 'Medula One', cursive;
        background-color: #272727;
    }
    .root{
        height: 100%;
    }
`;

import { createGlobalStyle } from 'styled-components';
import colors from "../constants/colors"

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    ul{
        list-style:none;
    }

    a{
        text-decoration:none;
    }

    img{
        max-width:100%;
        display:block;
    }

    body{
        font-family: "Roboto";
        background-color:${colors.primaryColor};
    }
`;


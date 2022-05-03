import { createGlobalStyle } from 'styled-components';

export const CreateGlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :root{
        --color-dark-blue: hsl(209,23%,22%);
        --color-very-dark-blue-dark: hsl(207,26%,17%);
        --color-very-dark-blue-light: hsl(200, 15%,8%);
        --color-dark-gray-light: hsl(0,0%,52%);
        --color-very-light-gray-light-bg: hsl(0,0%,98%);
        --color-white-dark-mode: hsl(0,0%,100%);
    }

    body{
        font-family: 'Nunito Sans', sans-serif;
        background-color: var(--color-very-dark-blue-dark);
        color: var(--color-white-dark-mode);
    }
`
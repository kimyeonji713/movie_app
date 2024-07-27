import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  point: "#B80000",
  sub: "#666",
};

export const spacing = {
  side: "120px",
  moside: "20px",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{box-sizing:border-box}


    body{
        font-family: "Noto Sans KR", sans-serif;
        background-color: #252525;
        color: white;
    }

    ul,li{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: white;
    }

    
`;

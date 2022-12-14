import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    &.ir {
        width: 1px;
        height: 1px;
        margin: -1px;
        position: absolute;
        overflow: hidden;
        clip: rect(1px 1px 1px 1px);
    }
    a {
  color: #c4c4c4;
  text-decoration: none;
}

body {
  background-color: #f2f2f2;
}

input {
  outline: none;
}

button {
  cursor: pointer;
}
`;

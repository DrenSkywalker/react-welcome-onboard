import { createGlobalStyle } from "styled-components";

import Inter from "./Inter.ttf";

export default createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: url(${Inter});
  }
`;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  line-height: 1.5;
  font-weight: 400;
  overflow-x: hidden ;
  color: rgba(255, 255, 255, 0.87);
  background-color: #090909;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;

  text-decoration: inherit;
}

body {
  margin: 0;
  padding:0;
  font-family: "Ubuntu", system-ui, Avenir, Helvetica, Arial, serif;
  box-sizing: border-box;
overflow-x: hidden ;
  min-width: 320px;
  min-height: 100vh;
}
body::before {
  content: "";
  
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 600px;
  background: radial-gradient(
    circle,
    rgba(70, 181, 130, 0.5) -50%,
    transparent 70%
  );
  border-radius: 50%;
  z-index: -1; 
   overflow-x: hidden;
}

`;

export default GlobalStyles;

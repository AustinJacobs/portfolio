import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    display: grid;
    max-width: 100%;
  }

  .menuNav {
  overflow-y: scroll;
  position: fixed;
  top: 110px;
  background: white;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 0;
  overflow: hidden;
  max-width: 100%;
  z-index: 9;
}

.menuNav.showMenu {
  width: 100%;
}

.nav-a {
  color: orange;
}

.nav-a:hover {
  text-decoration: underline;
  color: black;
}

.footer-a:hover {
  text-decoration: underline;
  color: black;
}

.carousel {
  align-self: center
}
`;

export default GlobalStyles;

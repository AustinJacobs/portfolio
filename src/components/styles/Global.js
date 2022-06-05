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
    max-width: 1800px;
    margin: 0 auto;
  }

  html {
  scroll-behavior: smooth;
}

.menuNav {
  position: fixed;
  background: white;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 0;
  max-width: 100%;
  z-index: 9;
  display: none;
}

.hamburger {
  z-index: 100;
  position: fixed;
  top: 30px;
  right: 30px
}

.logo {
  z-index: 100;
  position: fixed;
  top: 30px;
  left: 30px
}

.menuNav.showMenu {
  display: block;
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

.programmer-img {
  width: 90%;
  margin: 50px auto;

}

.hello-img {
  width: 90%;
  margin: 50px auto;
}

@media only screen and (min-width: 768px) {
  .hamburger {
    right: 100px
  }

  .logo {
    left: 100px
  }

  .programmer-img {
    width: 90%;
  }
}

@media only screen and (min-width: 992px) {
  
}

@media only screen and (min-width: 1200px) {
  
}

`;

export default GlobalStyles;

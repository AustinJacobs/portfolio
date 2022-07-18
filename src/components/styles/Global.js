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

.container {
  width: 75px;
  height: 75px;
  display: flex;
  place-content: center;
  overflow: hidden;
}

.item {
  width: 56%;
  overflow: visible;
  stroke: #FF7900;
  stroke-width: 4;
  stroke-linejoin: round;
  stroke-linecap: round;
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
  right: 40px
}

.logo {
  z-index: 100;
  position: fixed;
  top: 30px;
  left: 40px
}

.menuNav.showMenu {
  display: block;
  width: 100%;
}

.nav-a {
  color: black;
}

.nav-a:hover {
  text-decoration: underline;
  color: #FF7900;
}

.footer-a:hover {
  text-decoration: underline;
  color: #FF7900;
}

.programmer-img {
  width: 100%;
  margin: 50px auto;
}

.hello-img {
  width: 90%;
  margin: 50px auto;
}

.footer-logo {
  grid-column: 1/4;
  margin: 1em 0 0 0;
}

@media only screen and (min-width: 768px) {
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

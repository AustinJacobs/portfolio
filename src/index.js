import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation, Footer, Home, Experience, Work } from './components';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './components/styles/Global';
import { NextUIProvider } from '@nextui-org/react'; // Add createTheme and uncomment other code to add theme switch.
// import { ThemeProvider as NextThemesProvider } from 'next-themes';

// // 2. Call `createTheme` and pass your custom values
// const lightTheme = createTheme({
//   type: 'light',
//   theme: {
//     colors: {
//       myColor: '#ff4ecd',
//     }
//   }, // optional
// });

// const darkTheme = createTheme({
//   type: 'dark',
//   theme: {
//     colors: {
//       myColor: '#000000',
//     }
//   }, // optional
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}> */}
      <NextUIProvider>
        <GlobalStyles />
        <Router>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/work' element={<Work />} />
          </Routes>
          <Footer />
        </Router>
      </NextUIProvider>
    {/* </NextThemesProvider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigation, Footer, Home, Experience, Work, 
ArticleDetail, ArticlesGrid } from './components';
import GlobalStyles from './components/styles/Global';
import { NextUIProvider } from '@nextui-org/react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createPrismicLink } from 'apollo-link-prismic';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.TRACKING_ID);

const client = new ApolloClient({
  link: createPrismicLink({
    uri: `${process.env.REACT_APP_API_URL}`,
    accessToken: `${process.env.REACT_APP_ACCESS_TOKEN}`,
  }),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <NextUIProvider>
        <GlobalStyles />
        <Router>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/work' element={<Work />} />
            <Route path='/blog' element={<ArticlesGrid />} />
            <Route path='blog/:articleUid' element={<ArticleDetail />} />
          </Routes>
          <Footer />
        </Router>
      </NextUIProvider>
    </ApolloProvider>
  </React.StrictMode>
);

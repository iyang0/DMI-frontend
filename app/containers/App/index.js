/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import { Switch, Route } from 'react-router-dom';

import MainPage from 'containers/MainPage/Loadable';
import AddPage from 'containers/AddPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Helmet defaultTitle="DMI takehome">
        <meta name="description" content="Takehome assignment for DMI" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/add" component={AddPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </div>
  );
}

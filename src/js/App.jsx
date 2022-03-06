import React from 'react';
import { Routes, Route, Link, useRoutes } from 'react-router-dom';
import { Navbar, ErrorBoundary } from './components';
import routes from './constants/routes';

const App = () => (
  <div className='container'>
    <ErrorBoundary>
      <Navbar />
      {useRoutes(routes)}
    </ErrorBoundary>
  </div>
);

export default App;
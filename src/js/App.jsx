import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Navbar, ErrorBoundary } from './components';
import routes from './constants/routes';

function App() {
  return (
    <div className="container">
      <ErrorBoundary>
        <Navbar />
        {useRoutes(routes)}
      </ErrorBoundary>
    </div>
  );
}

export default App;

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './stylesheets/main.scss';
import App from './js/App';
import store from './js/store/index';

const title = 'ReactReduxWebpackTemplate';
const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App title={title} />
    </BrowserRouter>
  </Provider>
);

if (module && module.hot) module.hot.accept();

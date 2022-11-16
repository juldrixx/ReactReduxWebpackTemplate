import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore(rootReducer, storeEnhancers(applyMiddleware(thunk)));

export default store;

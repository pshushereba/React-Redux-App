import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import and create Redux store

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

// Import Redux Thunk
import thunk from 'redux-thunk';

// Import Reducer(s)

import { playerReducer } from './reducers/PlayerReducer.js';

const store = createStore(
                playerReducer,
                applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

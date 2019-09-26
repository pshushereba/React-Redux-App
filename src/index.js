import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import and create Redux store

import {createStore} from 'redux';
import {Provider} from 'react-redux';

// Import Reducer(s)

import { playerReducer } from './reducers/PlayerReducer.js';

const store = createStore(playerReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

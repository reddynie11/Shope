import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import myStore from './redux/store';

import App from './App';

ReactDOM.render(
<Provider store={myStore} >
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'));



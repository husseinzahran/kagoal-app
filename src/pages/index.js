import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthApp from './AuthApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AuthApp />, document.getElementById('login'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

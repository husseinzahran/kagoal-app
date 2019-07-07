import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GoalsApp from './components/ManageGoals/GoalsApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<GoalsApp />, document.getElementById('goals'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

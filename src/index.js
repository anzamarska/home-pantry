import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Root from './views/Root/Root';



ReactDOM.render(<App />, document.getElementById('app'));
serviceWorker.unregister();

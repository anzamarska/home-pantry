import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Root from './views/Root/Root';



ReactDOM.render(<Root />, document.getElementById('app'));
serviceWorker.unregister();

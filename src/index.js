import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './Store';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let storeInstance = Store()

ReactDOM.render(
	<Provider store={storeInstance}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();

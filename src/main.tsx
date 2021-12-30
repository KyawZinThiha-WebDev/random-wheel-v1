import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/index.scss';
import State from 'state';

ReactDOM.render(
	<React.StrictMode>
		<State>
			<App />
		</State>
	</React.StrictMode>,
	document.getElementById('root'),
);

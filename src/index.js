import React from 'react';
import ReactDOM from 'react-dom';

import App from 'containers/App';

const rootElement = document.getElementById('root');
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	rootElement
);

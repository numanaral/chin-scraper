import React from 'react';
import 'normalize.css';

import CenteredContainer from 'components/CenteredContainer';
import Source from 'components/Source';
import Scraper from 'containers/Scraper';

const App = () => {
	return (
		<CenteredContainer>
			<Source />
			<Scraper />
		</CenteredContainer>
	);
};

export default App;

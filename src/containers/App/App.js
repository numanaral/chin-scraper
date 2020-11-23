import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { FirebaseAppProvider, SuspenseWithPerf } from 'reactfire';
import { BrowserRouter as Router } from 'react-router-dom';

import { firebaseConfig } from 'store/firebase';
import ThemeProvider from 'providers/ThemeProvider';
import NavigationBar from 'components/NavigationBar';
import Footer from 'components/Footer';
import Routes from 'routes';
import LoadingIndicator from 'components/LoadingIndicator';
import Background from './Background';

// Smooth scroll polyfill
smoothscroll.polyfill();

const App = () => (
	<FirebaseAppProvider firebaseConfig={firebaseConfig}>
		<Router>
			<ThemeProvider>
				{themeProps => (
					<Background>
						<NavigationBar />
						<SuspenseWithPerf
							fallback={<LoadingIndicator />}
							traceId="load-scraper-status"
						>
							<Routes themeProps={themeProps} />
						</SuspenseWithPerf>
						<Footer />
					</Background>
				)}
			</ThemeProvider>
		</Router>
	</FirebaseAppProvider>
);

export default App;

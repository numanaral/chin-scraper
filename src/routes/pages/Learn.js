import React from 'react';
import { SuspenseWithPerf } from 'reactfire';

import PracticeContainer from 'containers/Learn';
import LoadingIndicator from 'components/LoadingIndicator';

const Learn = () => (
	<SuspenseWithPerf fallback={<LoadingIndicator />} traceId="load-learn">
		<PracticeContainer />
	</SuspenseWithPerf>
);

export default Learn;

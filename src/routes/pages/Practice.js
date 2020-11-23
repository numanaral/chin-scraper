import React from 'react';
import { SuspenseWithPerf } from 'reactfire';

import PracticeContainer from 'containers/Practice';
import LoadingIndicator from 'components/LoadingIndicator';

const Practice = () => (
	<SuspenseWithPerf fallback={<LoadingIndicator />} traceId="load-practice">
		<PracticeContainer />
	</SuspenseWithPerf>
);

export default Practice;

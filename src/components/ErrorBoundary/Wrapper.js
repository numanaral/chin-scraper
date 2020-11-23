import React from 'react';
import ErrorBoundary from 'components/ErrorBoundary';

const ErrorBoundaryWrapper = ({ components, props }) =>
	components.map((Component, ind) => (
		<ErrorBoundary key={ind}>
			<Component {...props} />
		</ErrorBoundary>
	));

export default ErrorBoundaryWrapper;

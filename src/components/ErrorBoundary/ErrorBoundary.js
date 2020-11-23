import React from 'react';

import { propTypes, defaultProps } from './types';

/**
 * Catches errors on children and displays error information
 * instead of breaking the entire app
 *
 */
class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
			error: {
				title: props.title,
				message: '',
			},
		};
	}

	static getDerivedStateFromError(/* error */) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// You can also log the error to an error reporting service
		this.setState(prevState => {
			return {
				...prevState,
				error: {
					...prevState.error,
					message: error.message || errorInfo.componentStack || '',
				},
			};
		});
	}

	render() {
		const { hasError, error } = this.state;
		const { title, message } = error;
		const { children } = this.props;

		return (
			(hasError && (
				<>
					<h1> {title} </h1>
					<pre> {message} </pre>
				</>
			)) ||
			children
		);
	}
}

ErrorBoundary.propTypes = propTypes;
ErrorBoundary.defaultProps = defaultProps;

export default ErrorBoundary;

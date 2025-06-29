/**
 * Extracts a meaningful error message from various error types, with special
 * handling for axios errors.
 *
 * Handles axios response errors, request errors, and falls back to generic
 * error messages for other error types.
 *
 * @param {Error | import("axios").AxiosError} error - The error object to extract message from.
 * @returns {string} A user-friendly error message.
 *
 * @example
 * ```js
 * try {
 *   await axios.get('/api/data');
 * } catch (error) {
 *   const message = getErrorMessage(error);
 *   console.error(message); // "Request failed with status 404"
 * }
 * ```
 */
export const getErrorMessage = error => {
	// Handle axios errors
	if (error?.isAxiosError) {
		// Response error (server responded with error status)
		if (error.response) {
			const { status, data } = error.response;

			// Try to extract error message from response data
			if (data?.message) {
				return data.message;
			}

			if (data?.error) {
				return data.error;
			}

			// Fallback to status-based message
			return `Request failed with status ${status}`;
		}

		// Request error (network issue, no response received)
		if (error.request) {
			return 'Network error: Unable to reach the server';
		}

		// Other axios error (request setup issue)
		if (error.message) {
			return `Request error: ${error.message}`;
		}
	}

	// Handle generic Error objects
	if (error instanceof Error) {
		return error.message;
	}

	// Handle string errors
	if (typeof error === 'string') {
		return error;
	}

	// Fallback for unknown error types
	return 'An unexpected error occurred';
};

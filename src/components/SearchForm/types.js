import { string, func } from 'prop-types';

const propTypes = {
	input: string,
	onSubmit: func.isRequired,
	onChange: func.isRequired,
};

const defaultProps = {
	string: '',
};

export { propTypes, defaultProps };

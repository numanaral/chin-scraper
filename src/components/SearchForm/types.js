import { string, func, bool } from 'prop-types';

const propTypes = {
	input: string,
	onSubmit: func.isRequired,
	onChange: func.isRequired,
	loading: bool,
};

const defaultProps = {
	string: '',
	loading: false,
};

export { propTypes, defaultProps };

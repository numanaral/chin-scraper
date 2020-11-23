import { func, string } from 'prop-types';

const propTypes = {
	theme: string.isRequired,
	setTheme: func.isRequired,
};

export { propTypes };

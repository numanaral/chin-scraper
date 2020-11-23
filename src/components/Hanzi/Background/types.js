import { bool, string } from 'prop-types';

import { numberOrString } from 'components/types';

const propTypes = {
	riceGrid: bool,
	size: numberOrString,
	color: string,
	opacity: numberOrString,
};
const defaultProps = {
	riceGrid: true,
	size: 150,
	color: '#f50057',
	opacity: 0.4,
};

export { propTypes, defaultProps };

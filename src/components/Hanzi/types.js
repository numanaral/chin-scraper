import { numberOrString, refType } from 'components/types';
import { bool } from 'prop-types';

const propTypes = {
	innerRef: refType.isRequired,
	size: numberOrString.isRequired,
	riceGrid: bool,
};

const defaultProps = {
	riceGrid: true,
};

export { propTypes, defaultProps };

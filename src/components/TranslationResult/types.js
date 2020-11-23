import { string } from 'prop-types';

const propTypes = {
	translation: string,
	pinyin: string,
};
const defaultProps = {
	translation: '',
	pinyin: '',
};

export { propTypes, defaultProps };

import { arrayOf, string, shape } from 'prop-types';

const cardProps = {
	text: string,
	id: string.isRequired,
	hanzi: string.isRequired,
	translation: string.isRequired,
	pinyin: string.isRequired,
};

const cardType = shape(cardProps);

const cards = arrayOf(cardType);

const propTypes = {
	cards,
};

const defaultProps = {
	cards: [],
};

export { cardProps, cardType, cards, propTypes, defaultProps };

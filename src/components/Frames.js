import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import CenteredContainer from 'components/CenteredContainer';
import IFrame from 'components/IFrame';

const Frames = ({ currentCharsWithEscapedPairs }) => (
	<CenteredContainer>
		{currentCharsWithEscapedPairs.map((charPair, ind) => (
			<IFrame key={charPair.originalChar + ind} {...charPair} />
		))}
	</CenteredContainer>
);

Frames.propTypes = {
	currentCharsWithEscapedPairs: arrayOf(
		shape({
			originalChar: string.isRequired,
			escapedChar: string.isRequired,
		})
	),
};

Frames.defaultProps = {
	currentCharsWithEscapedPairs: [],
};

export default Frames;

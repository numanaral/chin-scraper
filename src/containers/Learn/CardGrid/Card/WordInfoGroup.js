import React from 'react';

import { wordInfoGroupPropTypes, wordInfoGroupDefaultProps } from './types';
import ExtrasContainer from './ExtrasContainer';
import TypographyWrapper from './TypographyWrapper';

const WordInfoGroup = ({
	isParentHovering,
	isHovering,
	cardProps,
	visible,
}) => {
	const { translation, pinyin } = cardProps;

	return (
		visible && (
			<ExtrasContainer
				$position="top"
				$isParentHovering={isParentHovering}
				$isHovering={isHovering}
			>
				<div>
					<TypographyWrapper isKey>Translation:</TypographyWrapper>
					{` `}
					<TypographyWrapper>{translation}</TypographyWrapper>
				</div>
				<div>
					<TypographyWrapper isKey>Pinyin:</TypographyWrapper>{' '}
					<TypographyWrapper>{pinyin}</TypographyWrapper>
				</div>
			</ExtrasContainer>
		)
	);
};

WordInfoGroup.propTypes = wordInfoGroupPropTypes;
WordInfoGroup.defaultProps = wordInfoGroupDefaultProps;

export default WordInfoGroup;

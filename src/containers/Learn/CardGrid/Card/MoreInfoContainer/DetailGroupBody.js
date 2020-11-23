import React from 'react';

import { firstCapital, pascalToSentence } from 'utils';
import TypographyWrapper from '../TypographyWrapper';

import { detailGroupBodyPropTypes, detailGroupBodyDefaultProps } from './types';

const DetailGroupBody = ({ body }) =>
	(Array.isArray(body) &&
		body.map(text => (
			<TypographyWrapper key={text} component="p">
				{text}
			</TypographyWrapper>
		))) ||
	Object.keys(body).map(key => (
		<TypographyWrapper component="p" key={key}>
			<TypographyWrapper isKey>
				{firstCapital(pascalToSentence(key))}:
			</TypographyWrapper>{' '}
			<TypographyWrapper>{body[key]}</TypographyWrapper>
		</TypographyWrapper>
	));

DetailGroupBody.propTypes = detailGroupBodyPropTypes;
DetailGroupBody.defaultProps = detailGroupBodyDefaultProps;

export default DetailGroupBody;

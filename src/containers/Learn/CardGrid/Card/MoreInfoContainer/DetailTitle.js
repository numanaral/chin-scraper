import React from 'react';

import { firstCapital } from 'utils';
import { detailTitlePropTypes, detailTitleDefaultProps } from './types';
import TypographyWrapper from '../TypographyWrapper';

const DetailTitle = ({ isKey, children, ...rest }) => (
	<TypographyWrapper variant="subtitle1" component="b" isKey {...rest}>
		{firstCapital(children)}
	</TypographyWrapper>
);

DetailTitle.propTypes = detailTitlePropTypes;
DetailTitle.defaultProps = detailTitleDefaultProps;

export default DetailTitle;

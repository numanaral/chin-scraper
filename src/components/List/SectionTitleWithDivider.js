import React from 'react';
import { Divider } from '@material-ui/core';

import SectionTitle from './SectionTitle';
import { sectionTitlePropTypes, sectionTitleDefaultProps } from './types';

const SectionTitleWithDivider = listItemTextProps => (
	<>
		<SectionTitle {...listItemTextProps} />
		<Divider />
	</>
);

SectionTitleWithDivider.propTypes = sectionTitlePropTypes;
SectionTitleWithDivider.defaultProps = sectionTitleDefaultProps;

export default SectionTitleWithDivider;

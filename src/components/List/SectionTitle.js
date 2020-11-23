import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

import { sectionTitlePropTypes, sectionTitleDefaultProps } from './types';

const SectionTitle = listItemTextProps => (
	<ListItem>
		<ListItemText {...listItemTextProps} />
	</ListItem>
);

SectionTitle.propTypes = sectionTitlePropTypes;
SectionTitle.defaultProps = sectionTitleDefaultProps;

export default SectionTitle;

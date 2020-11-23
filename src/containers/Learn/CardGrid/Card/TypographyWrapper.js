import React from 'react';
import { Typography } from '@material-ui/core';
import { bool } from 'prop-types';

const TypographyWrapper = ({ isKey, ...rest }) => (
	<Typography
		variant="caption"
		{...(isKey && { color: 'primary' })}
		{...rest}
	/>
);

TypographyWrapper.propTypes = {
	isKey: bool,
};
TypographyWrapper.defaultProps = {
	isKey: false,
};

export default TypographyWrapper;

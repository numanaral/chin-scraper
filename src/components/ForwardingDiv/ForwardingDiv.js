import { motion } from 'framer-motion';
import React, { forwardRef } from 'react';

import { propTypes, defaultProps } from './types';

/**
 * @component
 *
 * @param {Object} props
 * @param {import('react').ElementType|HTMLElementTagNameMap} props.component
 * @param {...any} props.rest
 */
const ForwardingDiv = forwardRef(({ className, component, ...rest }, ref) => (
	<motion.div
		className={
			`theme-duration-wrapper${className && ` ${className}`}` || ''
		}
		{...rest}
		ref={ref}
	/>
));

ForwardingDiv.propTypes = propTypes;
ForwardingDiv.defaultProps = defaultProps;

export default ForwardingDiv;

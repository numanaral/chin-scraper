import React, { cloneElement, useState } from 'react';
import { IconButton, Popover as MuiPopover } from '@material-ui/core';
import TooltipButton from 'components/TooltipButton';
import styled from 'styled-components';

import { propTypes, defaultProps } from './types';

const Wrapper = styled.div`
	&.MuiPopover-root {
		margin: auto;
		// width: '3.5rem',
		height: 48px;
		width: 48px;

		display: inline-flex;
		position: relative;
		align-items: center;
		vertical-align: middle;
		-moz-appearance: none;
		justify-content: center;
	}

	& button {
		margin: auto;
	}
`;

const Popover = ({
	component,
	anchorOrigin,
	transformOrigin,
	passDownOnCloseProp,
	tooltip,
	text,
	icon,
	...rest
}) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const onClick = e => {
		e.stopPropagation();
		setAnchorEl(e.currentTarget);
	};
	const onClose = () => {
		setAnchorEl(null);
	};

	const isPopoverOpen = Boolean(anchorEl);
	const id = isPopoverOpen ? 'simple-popover' : undefined;

	return (
		<Wrapper>
			<TooltipButton
				aria-describedby={id}
				tooltip={tooltip}
				onClick={onClick}
				text={text}
				icon={icon}
			/>
			<MuiPopover
				id={id}
				open={isPopoverOpen}
				anchorEl={anchorEl}
				onClose={onClose}
				anchorOrigin={anchorOrigin}
				transformOrigin={transformOrigin}
				{...rest}
			>
				{(passDownOnCloseProp &&
					cloneElement(component, { popoverOnClose: onClose })) ||
					component}
			</MuiPopover>
		</Wrapper>
	);
};

Popover.propTypes = propTypes;
Popover.defaultProps = defaultProps;

export default Popover;

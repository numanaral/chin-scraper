import React, { useState } from 'react';
import { Button as MuiButton, Tooltip, useMediaQuery } from '@material-ui/core';

import { getElementFromElementOrType } from 'utils/react';
import LoadingIndicator from 'components/LoadingIndicator';
import { defaultProps, propTypes } from './types';
import StyledIconButton from './StyledIconButton';
import StyledLoadingIconButton from './StyledLoadingIconButton';

/**
 * Text/Icon Button with Tooltip. If the text prop has value then
 * it's a TextTooltipButton, else it's IconTooltipButton
 *
 * @example
 * ```js
 * // IconTooltipButton
 * <TooltipButton tooltip="Details" onClick={onClick} icon={DetailsIcon} />
 *
 * // TextTooltipButton
 * <TooltipButton tooltip="Details" text="Details" onClick={onClick} icon={DetailsIcon} />
 * ```
 *
 * @component
 * @param {...(import('@material-ui/core').TooltipProps|import('@material-ui/core').ButtonProps|import('@material-ui/core').IconButtonProps)}
 */
const TooltipButton = ({
	// Tooltip props
	tooltip,
	interactive,
	// Button props
	onClick,
	bg,
	icon,
	disabled,
	type,
	preventDefaultEvent,
	displayTooltipOnClickForMobile,
	loading,
	// TextButton props
	text,
	variant,
	// IconButton props
	// MuiButtonProps|MuiIconButtonProps
	...rest
}) => {
	if (type !== 'submit' && !onClick) {
		throw new Error(
			'Either provide an onClick handler or set the type="submit"'
		);
	}

	// Manual triggering of tooltip on mobile
	const [isTooltipOpen, setIsTooltipOpen] = useState(false);
	const smAndDown = useMediaQuery(theme => theme.breakpoints.down('sm'));

	// Prevents default event
	const wrappedOnClick = async e => {
		if (preventDefaultEvent) {
			e.preventDefault();
			e.stopPropagation();
		}

		// Manual triggering of tooltip on mobile
		if (displayTooltipOnClickForMobile && smAndDown) {
			setIsTooltipOpen(true);
			setTimeout(() => {
				setIsTooltipOpen(false);
			}, 1000);
		}

		onClick?.(e);
	};

	let button = (text && (
		<MuiButton
			variant={variant}
			color={bg}
			startIcon={getElementFromElementOrType(icon)}
			onClick={wrappedOnClick}
			disabled={disabled || loading}
			endIcon={(loading && <LoadingIndicator size="small" />) || null}
			type={type}
			{...rest}
		>
			{text}
		</MuiButton>
	)) || (
		<StyledIconButton
			onClick={wrappedOnClick}
			disabled={disabled || loading}
			type={type}
			$bg={bg}
			{...rest}
		>
			{loading && <StyledLoadingIconButton />}
			{getElementFromElementOrType(icon)}
		</StyledIconButton>
	);

	let disabledText = '';

	// To show tooltip on disabled items
	if (disabled) {
		button = <span className="tooltip-wrapper">{button}</span>;
		disabledText = ' (DISABLED)';
	}

	return (
		<Tooltip
			title={tooltip + disabledText}
			interactive={interactive}
			enterTouchDelay={0}
			disableFocusListener
			open={isTooltipOpen}
			onOpen={() => setIsTooltipOpen(true)}
			onClose={() => setIsTooltipOpen(false)}
		>
			{button}
		</Tooltip>
	);
};

TooltipButton.propTypes = propTypes;
TooltipButton.defaultProps = defaultProps;

export default TooltipButton;

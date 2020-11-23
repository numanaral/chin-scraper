import React from 'react';
import { Switch as MuiSwitch, FormControlLabel } from '@material-ui/core';

import { propTypes, defaultProps } from './types';

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
const Switch = ({ label, name, checked, onCheck, color, ...rest }) => {
	const handleChange = event => {
		onCheck(event.target.name, event.target.checked);
	};

	return (
		<FormControlLabel
			control={
				<MuiSwitch
					checked={checked}
					onChange={handleChange}
					name={name}
					color={color}
					{...rest}
				/>
			}
			label={label}
		/>
	);
};

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default Switch;

import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import Spacer from 'components/Spacer';
import { propTypes, defaultProps } from './types';

/**
 * Toggle for a button groups.
 *
 * @example
 * ```js
 * <Toggle
 * 	value={theme}
 * 	onChange={setTheme}
 * 	options={[
 * 		{
 * 			value: 'dark',
 * 			label: 'Dark',
 * 			icon: <DarkThemeIcon color="primary" />,
 * 		},
 * 		{
 * 			value: 'light',
 * 			label: 'Light',
 * 			icon: <LightThemeIcon style={{ color: yellow[500] }} />,
 * 		},
 * 	]}
 * />
 * ```
 *
 * @component
 * @param {...(import('@material-ui/lab').ToggleButtonGroupProps)}
 */
const Toggle = ({ value, onChange, options, size, ...rest }) => {
	const handleOnChange = (event, newValue) => {
		if (!newValue || value === newValue) return;
		onChange(newValue);
	};
	return (
		<ToggleButtonGroup value={value} onChange={handleOnChange} {...rest}>
			{options.map(elm => (
				<ToggleButton
					value={elm.value}
					key={elm.value}
					disabled={elm.disabled}
					size={size}
				>
					{elm.icon && (
						<>
							{elm.icon}
							<Spacer direction="right" />
						</>
					)}
					{elm.label}
				</ToggleButton>
			))}
		</ToggleButtonGroup>
	);
};

Toggle.propTypes = propTypes;
Toggle.defaultProps = defaultProps;

export default Toggle;

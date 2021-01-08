import React, { useState } from 'react';
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Menu as MuiMenu,
	MenuItem,
	Checkbox,
} from '@material-ui/core';
import styled from 'styled-components';

import { getElementFromElementOrType } from 'utils/react';
import TooltipButton from 'components/TooltipButton';
import { propTypes, defaultProps } from './types';

const StyleCheckbox = styled(Checkbox)`
	margin-right: 8;
`;

const StyleListItemIcon = styled(ListItemIcon)`
	${({ theme, $small, $isSelected }) => `
		${($small && `min-width: ${theme.spacing(5)}px;`) || ''}
		${($isSelected && `color: ${theme.palette.primary.main}`) || ''}
	`}
`;

const StyleListItemText = styled(ListItemText)`
	${({ theme, $isSelected }) => `
		${($isSelected && `color: ${theme.palette.primary.main}`) || ''}
	`}
`;

const Menu = ({
	label,
	options, // [string, string, ...] || [{label, value}, {label, value}, ....]
	onClick,
	selected,
	icon,
	displaySelected,
	multi,
	small,
	labelKey,
	valueKey,
	iconMenu,
	menuProps,
	...rest
}) => {
	const optionIsObject = typeof options[0] === 'object';
	let _selected = multi ? selected : [selected];
	if (optionIsObject) {
		_selected = _selected.map(
			s => options.find(option => option[valueKey] === s)?.[labelKey]
		);
	}
	const selectedOptionLabel = _selected.join(', ');

	const [anchorEl, setAnchorEl] = useState(null);

	const handleClickListItem = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuItemClick = v => () => {
		// Ignore if not different
		if (multi || selected !== v) onClick(v);
		if (!multi) setAnchorEl(null);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			{(!iconMenu && (
				<List component="nav" aria-label={`List-${label}`} {...rest}>
					<ListItem
						button
						aria-haspopup="true"
						aria-controls={`List-item-${label}`}
						aria-label={label}
						onClick={handleClickListItem}
						dense={small}
					>
						{icon && (
							<StyleListItemIcon $small={small}>
								{getElementFromElementOrType(icon)}
							</StyleListItemIcon>
						)}
						<ListItemText
							primary={label}
							{...(displaySelected && {
								secondary: selectedOptionLabel || 'N/A',
							})}
						/>
					</ListItem>
				</List>
			)) || (
				<TooltipButton
					tooltip={label}
					onClick={handleClickListItem}
					icon={icon}
				/>
			)}
			<MuiMenu
				title={label}
				id={`lock-menu-${label}`}
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				{...menuProps}
			>
				{options.map(option => {
					let optionLabel = option;
					let value = option;
					let optionIcon;

					if (optionIsObject) {
						optionLabel = option[labelKey] || option[valueKey];
						value = option[valueKey];
						optionIcon = option.icon;
					}

					const isSelected = multi
						? selected.indexOf(value) >= 0
						: selected === value;
					return (
						<MenuItem
							key={value}
							{...(multi ? {} : { selected: isSelected })}
							onClick={handleMenuItemClick(value)}
						>
							{multi && (
								<StyleCheckbox
									color="primary"
									checked={isSelected}
								/>
							)}
							{optionIcon && (
								<StyleListItemIcon
									$isSelected={isSelected}
									$small={small}
								>
									{getElementFromElementOrType(optionIcon)}
								</StyleListItemIcon>
							)}
							<StyleListItemText $isSelected={isSelected}>
								{optionLabel}
							</StyleListItemText>
						</MenuItem>
					);
				})}
			</MuiMenu>
		</>
	);
};

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;

import React from 'react';
import {
	List as MuiList,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemSecondaryAction,
} from '@material-ui/core';
import styled from 'styled-components';

import loadable from 'utils/loadable';
import { getElementFromElementOrType } from 'utils/react';
import { listPropTypes, listDefaultProps } from './types';

const StyledList = styled(MuiList)`
	width: 100%;
`;

const StyledListItemText = styled(ListItemText)`
	${({ theme, secondaryText }) =>
		(!secondaryText && `padding: ${theme.spacing(1, 0)}`) || ''}
`;

const LazyCustomListItem = loadable(({ type }) => import(`./${type}`), {
	size: 'small',
	cacheKey: 'type',
});

const List = ({ list, listProps, listItemProps }) => (
	<StyledList {...listProps}>
		{list.map(
			(
				{ primaryText, secondaryText, type, icon, secondaryAction },
				ind
			) => {
				const id = primaryText?.split(' ').join('-') || `${ind}`;
				const listItemTextProps = {
					id,
					primary: primaryText,
					secondary: secondaryText,
				};

				return (
					(type && (
						<LazyCustomListItem
							key={id}
							type={type}
							{...listItemTextProps}
						/>
					)) || (
						<ListItem key={id} {...listItemProps}>
							{icon && (
								<ListItemIcon>
									{getElementFromElementOrType(icon)}
								</ListItemIcon>
							)}
							<StyledListItemText {...listItemTextProps} />
							{secondaryAction && (
								<ListItemSecondaryAction>
									{getElementFromElementOrType(
										secondaryAction
									)}
								</ListItemSecondaryAction>
							)}
						</ListItem>
					)
				);
			}
		)}
	</StyledList>
);

List.propTypes = listPropTypes;
List.defaultProps = listDefaultProps;

export default List;

import { IconButton } from '@material-ui/core';
import styled from 'styled-components';

const StyledIconButton = styled(IconButton)`
	${({ theme, $bg }) =>
		$bg === 'default'
			? ''
			: `
				&.MuiIconButton-root {
					background-color: ${theme.palette[$bg].main};
					color: ${theme.palette.getContrastText(theme.palette[$bg].main)};
					&:hover {
						background-color: ${theme.palette[$bg].dark};
					}
				}
	`}
`;

export default StyledIconButton;

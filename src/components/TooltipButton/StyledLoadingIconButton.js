import styled from 'styled-components';

import LoadingIndicator from 'components/LoadingIndicator';

const sizeMap = {
	small: 20,
	large: 35,
	default: 24,
	inherit: 24,
};

const multiplierMap = {
	small: 2.1,
	large: 1.7,
	default: 2,
	inherit: 2,
};

const StyledLoadingIconButton = styled(LoadingIndicator)`
	position: absolute;
	left: 0;
	right: 0;
	${({ theme, $iconSize }) => {
		const iconSize = theme.typography.pxToRem(
			(sizeMap[$iconSize] || sizeMap.default) *
				(multiplierMap[$iconSize] || multiplierMap.default)
		);

		return `
			width: ${iconSize} !important;
			height: ${iconSize} !important;
		`;
	}}
`;

export default StyledLoadingIconButton;

import React, { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';

import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import Card from 'containers/Learn/CardGrid/Card';
import { propTypes, defaultProps } from './types';
import FocusModeWrapper from './FocusModeWrapper';

const CardGrid = ({ cards }) => {
	const smAndDown = useMediaQuery(theme => theme.breakpoints.down('sm'));

	const [isChildInFocusMode, setIsChildInFocusMode] = useState(false);
	const [isHovering, setIsHovering] = useState(false);
	const onEnter = () => {
		if (smAndDown) return;
		setIsHovering(true);
	};
	const onLeave = () => {
		if (isChildInFocusMode) return;
		setIsHovering(false);
	};

	return (
		<ContainerWithCenteredItems
			onMouseEnter={onEnter}
			onMouseLeave={onLeave}
		>
			{isChildInFocusMode && <FocusModeWrapper />}
			{cards.map(card => (
				<Card
					isParentHovering={smAndDown || isHovering}
					key={card.id}
					isChildInFocusMode={isChildInFocusMode}
					setIsChildInFocusMode={setIsChildInFocusMode}
					smAndDown={smAndDown}
					{...card}
				/>
			))}
		</ContainerWithCenteredItems>
	);
};

CardGrid.propTypes = propTypes;
CardGrid.defaultProps = defaultProps;

export default CardGrid;

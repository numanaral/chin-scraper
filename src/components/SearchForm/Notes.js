import React from 'react';
import styled from 'styled-components';
import { Divider, Typography } from '@material-ui/core';

import useLocalStorage from 'hooks/useLocalStorage';
import TooltipButton from 'components/TooltipButton';
import { CloseIcon } from 'icons';
import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import PaperContainerWithSpacing from 'components/PaperContainerWithSpacing';

const Caption = props => <Typography variant="caption" {...props} />;

const PrimaryCaption = props => <Caption color="primary" {...props} />;

const SecondaryCaption = props => <Caption color="secondary" {...props} />;

const GreenCaption = styled(Caption)`
	${({ theme }) => `
		color: ${theme.palette.success.main};
	`}
`;

const RECOGNIZED_CHARACTER_TYPES = [
	'hanzi',
	'comma',
	'dot',
	'exclamation mark',
	'question mark',
];
const CHAR_TYPE_LENGTH = RECOGNIZED_CHARACTER_TYPES.length;
const NOTES_ARE_DISMISSED_LOCAL_STORAGE_KEY = 'notesAreDismissed';
const Notes = () => {
	const [notesAreDismissed, setNotesAreDismissed] = useLocalStorage(
		NOTES_ARE_DISMISSED_LOCAL_STORAGE_KEY,
		false
	);
	return (
		!notesAreDismissed && (
			<ContainerWithCenteredItems horizontal>
				<PaperContainerWithSpacing width="100%">
					<ContainerWithCenteredItems horizontal>
						<PrimaryCaption>Notes: </PrimaryCaption>
					</ContainerWithCenteredItems>
					<Divider />
					{/* eslint-disable max-len, prettier/prettier */}
					<ul>
						<Caption component="li">
							Recognized character types are{` `}
							{RECOGNIZED_CHARACTER_TYPES.map((type, ind) => (
								<>
									<SecondaryCaption key={type}>{type}</SecondaryCaption> 
									{ind < CHAR_TYPE_LENGTH - 2 && `, ` || ind < CHAR_TYPE_LENGTH - 1 && ', and ' || '.'}
								</>
							))}
						</Caption>
						<Caption component="li">
							<GreenCaption>Green color</GreenCaption> {` `}
							represents the
							{` `} <GreenCaption>radical</GreenCaption> {` `}
							in the hanzi drawings.
						</Caption>
					</ul>
					{/* eslint-enable max-len, prettier/prettier */}
					<ContainerWithCenteredItems>
						<TooltipButton
							tooltip="Dismiss Notes"
							text="Dismiss Notes"
							onClick={() => setNotesAreDismissed(true)}
							icon={CloseIcon}
						/>
					</ContainerWithCenteredItems>
				</PaperContainerWithSpacing>
			</ContainerWithCenteredItems>
		)
	);
};

export default Notes;

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
					<ul>
						<Caption component="li">
							Recognized characters are{` `}
							<SecondaryCaption>hanzi</SecondaryCaption> {`, `}
							<SecondaryCaption>comma</SecondaryCaption> {`, `}
							<SecondaryCaption>dot</SecondaryCaption> {`, `}
							<SecondaryCaption>
								exclamation mark
							</SecondaryCaption>{' '}
							{`, and `}
							<SecondaryCaption>question mark</SecondaryCaption>.
						</Caption>
						<Caption component="li">
							<GreenCaption>Green color</GreenCaption> {` `}
							represents the
							{` `} <GreenCaption>radical</GreenCaption> {` `}
							in the hanzi drawings.
						</Caption>
						<Caption component="li">
							The server is hosted on a free provider so
							{` `}
							<SecondaryCaption>
								after inactivity, the server will start
								hibernating
							</SecondaryCaption>
							{`. `}
							<ul>
								<Caption component="li">
									This means that if you happen to be the
									first person to wake it up,{` `}
									<SecondaryCaption>
										your first request will take a little
										while to load
									</SecondaryCaption>
									.
								</Caption>
							</ul>
						</Caption>
					</ul>
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

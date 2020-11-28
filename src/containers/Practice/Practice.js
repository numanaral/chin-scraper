import React, { useEffect } from 'react';
import {
	Box,
	Grid,
	InputAdornment,
	Paper,
	TextField,
	useMediaQuery,
} from '@material-ui/core';
import styled from 'styled-components';

import ContainerWithCenteredItems from 'components/ContainerWithCenteredItems';
import PageContainer from 'routes/PageContainer';
import TooltipButton from 'components/TooltipButton';
import {
	PreviousIcon,
	NextIcon,
	SubmitIcon,
	ReplayIcon,
	SettingsIcon,
	SpeakIcon,
} from 'icons';
import Spacer from 'components/Spacer';
import Popover from 'components/Popover';
import { trySpeakNative } from 'utils/speech';
import useOnResize from './useOnResize';
import useSwitchesWithPersistedConfig from './useSwitchesWithPersistedConfig';
import useHanziWriter from './useHanziWriter';
import useInputWithCharacterList from './useInputWithCharacterList';
import useIndex from './useIndex';
import { DEFAULT_ICON_SIZE } from './constants';

const StyledPaper = styled(Paper)`
	${({ theme, $size }) => `
		position: relative;
		background-color: ${theme.palette.background.level2};
		padding: ${theme.spacing(2)}px;
		${($size && `width: ${$size}px`) || ''}
	`}
`;

const StyledTooltipButton = styled(TooltipButton)`
	position: absolute;
	top: 0;
	right: 0;
`;

const Practice = () => {
	const smAndDown = useMediaQuery(theme => theme.breakpoints.down('sm'));
	const { ref: pageRef, size } = useOnResize();
	const { switches, switchList } = useSwitchesWithPersistedConfig();
	const {
		characters,
		restart,
		input,
		onSubmit,
		...textFieldProps
	} = useInputWithCharacterList('', switches.shuffle, 'Enter hanzi(s)');
	const {
		index,
		isPreviousDisabled,
		isNextDisabled,
		onPrevious,
		onNext,
		onRestart,
	} = useIndex(input, [switches.shuffle], restart);
	const { hanzi } = useHanziWriter({
		size,
		characters,
		index,
		switches,
	});

	const getOrder = order => ({
		style: {
			order,
		},
	});

	const _switchList = switchList.map((switchComponent, ind) => (
		<div key={ind}>
			{switchComponent}
			<br />
		</div>
	));

	const onSpeak = () => trySpeakNative(characters[index]);

	useEffect(() => {
		if (switches.autoPlay) onSpeak();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [index]);

	return (
		<PageContainer innerRef={pageRef}>
			{/* INPUT BOX */}
			<form onSubmit={onSubmit}>
				<TextField
					value={input}
					variant="outlined"
					type="search"
					InputProps={{
						...(smAndDown && {
							startAdornment: (
								<Popover
									icon={SettingsIcon}
									component={
										<StyledPaper $size={350}>
											{_switchList}
										</StyledPaper>
									}
								/>
							),
						}),
						endAdornment: (
							<InputAdornment position="start">
								<TooltipButton
									tooltip="Search"
									disabled={!input}
									color="primary"
									icon={<SubmitIcon fontSize="small" />}
									type="submit"
								/>
							</InputAdornment>
						),
					}}
					{...textFieldProps}
				/>
			</form>
			{/* CONFIGURATION */}
			{!smAndDown && (
				<ContainerWithCenteredItems container alignItems="center">
					<Paper elevation={3}>
						<Box width={350} padding={2} textAlign="left">
							{_switchList}
						</Box>
					</Paper>
				</ContainerWithCenteredItems>
			)}
			{/* HANZI */}
			{!!characters.length && (
				<ContainerWithCenteredItems
					container
					alignItems="center"
					justify="space-between"
				>
					{/* LEFT BUTTON */}
					<div {...getOrder(2)}>
						<TooltipButton
							tooltip="Previous"
							icon={<PreviousIcon {...DEFAULT_ICON_SIZE} />}
							onClick={onPrevious}
							disabled={isPreviousDisabled}
						/>
						<Spacer order="1" direction="right" spacing="10" />
					</div>
					{/* DRAWING */}
					<Grid
						{...(smAndDown && {
							container: true,
							justify: 'center',
						})}
						item
						xs={12}
						md="auto"
						{...getOrder((smAndDown && 1) || 3)}
					>
						<StyledPaper elevation={3}>
							<StyledTooltipButton
								tooltip="Speak"
								onClick={onSpeak}
								disabled={!input}
								icon={<SpeakIcon {...DEFAULT_ICON_SIZE} />}
							/>
							{hanzi}
						</StyledPaper>
					</Grid>
					{/* RIGHT BUTTON */}
					<div {...getOrder(4)}>
						<Spacer order="2" direction="left" spacing="10" />
						{((!isNextDisabled || !switches.continuous) && (
							<TooltipButton
								tooltip="Next"
								icon={<NextIcon {...DEFAULT_ICON_SIZE} />}
								onClick={onNext}
								disabled={isNextDisabled}
							/>
						)) || (
							<TooltipButton
								tooltip="Restart"
								icon={<ReplayIcon {...DEFAULT_ICON_SIZE} />}
								onClick={onRestart}
							/>
						)}
					</div>
				</ContainerWithCenteredItems>
			)}
		</PageContainer>
	);
};

export default Practice;

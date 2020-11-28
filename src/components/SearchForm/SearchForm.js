import React from 'react';
import { InputAdornment, TextField, Typography } from '@material-ui/core';

import { speak } from 'utils/speech';
import { SpeakIcon, SearchIcon } from 'icons';
import TooltipButton from 'components/TooltipButton';
import StyledContainer from './StyledContainer';
import { propTypes, defaultProps } from './types';

const SearchForm = ({ input, onSubmit, onChange, loading }) => (
	<StyledContainer>
		<form onSubmit={onSubmit}>
			<TextField
				fullWidth
				autoFocus
				label="Search for Hanzi..."
				variant="outlined"
				type="search"
				placeholder="你好"
				value={input}
				name="chinese-character"
				onChange={onChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<TooltipButton
								tooltip="Speak"
								onClick={() => speak(input)}
								disabled={!input}
								icon={SpeakIcon}
							/>
						</InputAdornment>
					),
					endAdornment: (
						<InputAdornment position="start">
							<TooltipButton
								tooltip="Search"
								disabled={!input}
								loading={loading}
								color="primary"
								icon={SearchIcon}
								type="submit"
							/>
						</InputAdornment>
					),
				}}
			/>
			<br />
			<Typography color="primary" variant="caption">
				NOTE
			</Typography>
			{`: `}
			<Typography variant="caption">
				Recognized characters are
				{` `}
				<Typography color="primary" variant="caption">
					Hanzi
				</Typography>
				{`, `}
				<Typography color="primary" variant="caption">
					comma
				</Typography>
				{`, `}
				<Typography color="primary" variant="caption">
					dot
				</Typography>
				{`, `}
				<Typography color="primary" variant="caption">
					exclamation mark
				</Typography>
				{`, and `}
				<Typography color="primary" variant="caption">
					question mark
				</Typography>
				.
			</Typography>
		</form>
	</StyledContainer>
);

SearchForm.propTypes = propTypes;
SearchForm.defaultProps = defaultProps;

export default SearchForm;

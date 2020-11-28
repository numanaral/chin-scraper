import React from 'react';
import { InputAdornment, TextField } from '@material-ui/core';

import { speak } from 'utils/speech';
import { SpeakIcon, SearchIcon } from 'icons';
import TooltipButton from 'components/TooltipButton';
import Spacer from 'components/Spacer';
import { propTypes, defaultProps } from './types';
import Notes from './Notes';

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
			<Spacer direction="bottom" spacing="2" />
			<Notes />
		</form>
	</StyledContainer>
);

SearchForm.propTypes = propTypes;
SearchForm.defaultProps = defaultProps;

export default SearchForm;

import React from 'react';
import PrettyInput from 'components/PrettyInput';

const SearchForm = props => (
	<form onSubmit={e => e.preventDefault()}>
		<PrettyInput label="Search for Hanzi..." {...props} />
		<br />
		<small>
			<b>NOTE: </b>Only Hanzi (Chinese chars) will be recognized.
		</small>
	</form>
);

export default SearchForm;

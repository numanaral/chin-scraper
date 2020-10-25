import React from 'react';
import { func } from 'prop-types';

const SearchBox = ({ onChange }) => (
	<form onSubmit={e => e.preventDefault()}>
		<label htmlFor="chinese-character">
			Search for Chinese Character(s)
		</label>
		<br />
		<input
			type="search"
			placeholder="Eg: 你好"
			name="chinese-character"
			onChange={onChange}
		/>
		<br />
	</form>
);

SearchBox.propTypes = {
	onChange: func.isRequired,
};

export default SearchBox;

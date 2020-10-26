import React from 'react';
import { func, string } from 'prop-types';
import './style.css';

// Src: https://codepen.io/avstorm/pen/gKGbxo
const PrettyInput = ({ label, onChange }) => (
	<label htmlFor="chinese-character" className="inp">
		<input
			type="search"
			id="chineseInput"
			placeholder="&nbsp;"
			name="chinese-character"
			onChange={onChange}
		/>
		<span className="label">{label}</span>
		<span className="focus-bg" />
	</label>
);

PrettyInput.propTypes = {
	label: string.isRequired,
	onChange: func.isRequired,
};

export default PrettyInput;

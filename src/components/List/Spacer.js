import React from 'react';
import styled from 'styled-components';
import { ListItem } from '@material-ui/core';

const SpacedDiv = styled.div`
	height: 30px;
`;

const Spacer = () => (
	<ListItem>
		<SpacedDiv />
	</ListItem>
);

export default Spacer;

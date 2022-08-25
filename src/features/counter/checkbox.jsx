import React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function ControlledCheckbox({ onCheck, id, value }) {
	const [checked, setChecked] = React.useState(value);

	const handleChange = (event) => {
		setChecked(event.target.checked);
		onCheck(id)
	};


	return (
		<Checkbox
			checked={checked}
			onChange={handleChange}
			inputProps={{ 'aria-label': 'controlled' }}
		/>
	);
}
import TextField from '@mui/material/TextField';
import './style.css'

import MainButtons from './main-buttons';
import PostsList from './postsList';
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { setFilter } from './filterSlice'

export default function Main() {
	const dispatch = useDispatch();

	const [value, setValue] = useState('');
	useEffect(() => {
		dispatch(
			setFilter(value)
		)
	}, [value, dispatch])

	return (
		<div className="conteiner-main">
			<TextField onChange={(event) => setValue(event.target.value)} className="main-int" id="outlined-basic" label="Поиск" variant="outlined" /><br />
			<PostsList />
			<MainButtons />
		</div>
	);
}


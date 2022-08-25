import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import './style.css'

import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

export default function Add() {
	const [content, setContent] = useState('');
	const onContentChanged = (e) => setContent(e.target.value);
	const dispatch = useDispatch();

	const onSavePostClicked = () => {
		if (content) {
			dispatch(
				postAdded({
					id: nanoid(),
					content,
					isChecked: false,
					isDone: false,
				})
			);
			setContent("");
		}
	};


	const nameButton = [
		{ name: 'Добавить', id: nanoid() }
	]

	let nameAdd = nameButton.map(item => {
		return (
			<Link key={item.id} className='button' to="/">
				<Button type="button" variant="outlined" >{item.name}</Button>
			</Link>
		)
	})

	return (
		<div className='conteiner-add'>
			<TextField
				id="outlined-basic"
				label="Добавить"
				variant="outlined"
				value={content}
				onChange={onContentChanged}
			/><br />

			<div className='button-add' onClick={onSavePostClicked}>{nameAdd}</div>
		</div>
	);
}
import { nanoid } from "nanoid"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Link, useParams } from 'react-router-dom'

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { postUpdated } from "./postsSlice";

export default function Edit() {
	const nameButton = [
		{ name: 'редактировать', id: nanoid() }
	]

	let nameEdit = nameButton.map(item => {
		return (
			<Link key={item.id} className='button' to="/">
				<Button type="button" variant="outlined" >{item.name}</Button>
			</Link>
		)
	})
	const { id } = useParams();

	const post = useSelector((state) =>
		state.posts.find((post) => post.id === id)
	);

	const [content, setContent] = useState(post.content);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onContentChanged = (e) => setContent(e.target.value);
	const onSavePostClicked = () => {
		if (content) {
			dispatch(postUpdated({ id, content }));
			navigate(`/`);
		}
	};

	return (
		<div className='conteiner-add'>
			<TextField
				id="outlined-basic"
				label="Редактировать"
				variant="outlined"
				value={content}
				onChange={onContentChanged}
			/><br />

			<div className='button-add' onClick={onSavePostClicked}>{nameEdit}</div>
		</div>
	)
}

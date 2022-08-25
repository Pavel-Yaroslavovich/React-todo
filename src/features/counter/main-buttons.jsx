import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { deleteCheckedPosts } from './postsSlice';
import { postsPerformed } from './postsSlice';
import { useDispatch } from "react-redux";

import './style.css'

const returnBtns = (btns) => {
	return btns.map(item => {
		return (

			<div className='indent-button' key={item.id}>
				{item.render && item.render()}
			</div>

		)
	})
}

export default function MainButtons({ isDone }) {
	const dispatch = useDispatch();

	const onDeleteItems = () => {
		dispatch(
			deleteCheckedPosts(),
		)
	}


	const onPerformed = () => {
		dispatch(
			postsPerformed()
		)
	}


	const nameButtons = [
		{
			id: nanoid(), render: () => {
				return <Button variant="outlined">
					<Link className='button' to="/add">Добавить</Link>
				</Button>
			}
		},
		{
			id: nanoid(), render: () => {
				return <Button variant="outlined" onClick={onDeleteItems}>Удалить</Button>
			}
		},
		{
			id: nanoid(), render: () => {
				return <Button variant="outlined" onClick={onPerformed}>Выполненно</Button>
			}
		},

	]

	const buttons = returnBtns(nameButtons);

	return (
		<div >
			{buttons}
		</div>
	);
}

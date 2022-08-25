import React from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { postChangeChecked } from "./postsSlice";

import './style.css'

import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Checkbox from './checkbox'

const PostsList = () => {
	const dispatch = useDispatch();
	const posts = useSelector((state) => state.posts);
	const filter = useSelector((state) => state.filter);
	let postsHelper = posts;

	const hendelChecked = (id) => {
		dispatch(
			postChangeChecked({
				id
			})
		)
	}

	if (filter !== '') {
		postsHelper = posts.filter(item => item.content.indexOf(filter) !== -1);
	}

	const renderedPosts = postsHelper.map((post) => (
		<div key={post.id} id={post.id} className="element-list" >
			<span className={post.isDone ? "strikethrough" : ""}>{post.content}</span>
			{console.log(post)}
			<Link className='button' to={`/edit/${post.id}`}> <ModeEditIcon className='edit' /></Link>
			<Checkbox value={post.isChecked} onCheck={hendelChecked} id={post.id} />
		</div >
	));

	return (
		<div className="element-postsList">

			{renderedPosts}
		</div>
	)
};

export default PostsList;
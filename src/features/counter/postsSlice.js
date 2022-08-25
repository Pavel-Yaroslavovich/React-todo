import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		postAdded(state, action) {
			state.push(action.payload);
		},

		postUpdated(state, action) {
			const { id, content } = action.payload;
			const existingPost = state.find((post) => post.id === id);
			if (existingPost) {
				existingPost.content = content;
			}
		},
		postChangeChecked(state, action) {
			const { id } = action.payload;
			const existingPost = state.find((post) => post.id === id);
			existingPost.isChecked = !existingPost.isChecked;
		},
		deleteCheckedPosts(state) {
			const checkedPosts = state.filter((post) => !post.isChecked);
			return checkedPosts;
		},
		postsPerformed(state) {
			const checkedPosts = state.filter((post) => post.isChecked);
			checkedPosts.forEach(item => item.isDone = !item.isDone);
		}
	}
});

export const { postAdded, postUpdated, postChangeChecked, deleteCheckedPosts, postsPerformed } = postsSlice.actions;

export default postsSlice.reducer;
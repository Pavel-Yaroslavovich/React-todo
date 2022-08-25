import { configureStore } from "@reduxjs/toolkit";

import postsReducer from '../features/counter/postsSlice';
import filterReducer from "../features/counter/filterSlice";

export default configureStore({
	reducer: {
		posts: postsReducer,
		filter: filterReducer,
	}
});

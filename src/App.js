import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import Main from './features/counter/main';
import Add from './features/counter/add';
import Edit from './features/counter/editPostForm';


function App() {

	return (
		<div>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='add' element={<Add />} />
				<Route path='/edit/:id' element={<Edit />} />
			</Routes>
		</div>
	);
}

export default App;

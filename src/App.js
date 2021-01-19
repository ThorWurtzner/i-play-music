import { useEffect, useState } from 'react';
import { Router } from "@reach/router";
import './App.css';
import Walkthrough from './views/Walkthrough/Walkthrough';
import Login from './views/Login/Login';


function App() {

	var [database, setData] = useState([]);

	useEffect(function() {
		fetch("./database.json")
			.then(data => data.json())
			.then(data => setData(data))
	}, []);

	return (
		<Router>
			<Walkthrough path="/introduction" />
			<Login path="/login" />
		</Router>
	)
}

export default App;

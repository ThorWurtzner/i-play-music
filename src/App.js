import { useEffect, useState } from 'react';
import { Router } from "@reach/router";
import './App.css';
import Walkthrough from './views/Walkthrough/Walkthrough';
import Login from './views/Login/Login';
import Trends from './views/Trends/Trends';
import Feed from './views/Feed/Feed';
import Albums from './views/Albums/Albums';
import Player from './views/Player/Player';

function App() {

	var [database, setData] = useState([]);

	useEffect(function() {
		fetch("./database.json")
			.then(data => data.json())
			.then(data => setData(data))
	}, []);

	return (
		<Router>
			<Walkthrough data={database.walkthrough} path="/" />
			<Login path="/login" />
			<Trends data={database.trends} path="/trends" />
			<Feed data={database.trends} path="/feed" />
			<Albums path="/albums" />
			<Player path="/player" song="Don't Call Me Up" artist="Mabel" songLength="3:40" />
		</Router>
	)
}

export default App;

import { Router } from "@reach/router";
import './App.css';
import Walkthrough from './views/Walkthrough/Walkthrough';
import Login from './views/Login/Login';
import Trends from './views/Trends/Trends';
import Feed from './views/Feed/Feed';
import Albums from './views/Albums/Albums';
import Player from './views/Player/Player';
import Artists from './views/Artists/Artists';
import AlbumDetails from './views/AlbumDetails/AlbumDetails';
import Songs from './views/Songs/Songs';
import Categories from "./views/Categories/Categories";
import Featured from './views/Featured/Featured';
import Playlists from './views/Playlists/Playlists';
import Callback from './views/Callback/Callback';
import TokenContext from "./TokenContext";
import { useState } from "react";

function App() {
	var tokenState = useState(null);

	return (
		<TokenContext.Provider value={tokenState}>
			<Router>
				<Walkthrough path="/walkthrough" />

				{/* Need fixing of button styling because of added link */}
				<Login path="/" />
				
				<Callback path="/callback" />
				<Trends path="/trends" />
				<Feed path="/feed" />
				<Albums path="/albums" />
				{/* <Albums path="/albums/:id" /> */}

				<AlbumDetails path="/album/:id" />
				<Player path="/player/:id" />
				<Artists path="/artists" />
				<Songs path="/songs" />
				<Categories path="/categories" />
				<Featured path="/featured" />
				
				<Playlists path="/playlists" />
				<Playlists path="/playlists/:id" />
			</Router>
		</TokenContext.Provider>
	)
}

export default App;

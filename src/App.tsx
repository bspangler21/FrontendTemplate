// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FantasyFootballTeam from "./pages/FantasyFootballTeam";
import Home from "./pages/Home";
import Placeholder from "./pages/Placeholder";
import Cards from "./pages/Cards";
import PlayerDetails from "./pages/PlayerDetails";
import Abstract from "./pages/Abstract";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={Home}></Route>
				<Route
					path="/fantasy-football"
					Component={FantasyFootballTeam}
				></Route>
				<Route path="/cards" Component={Cards}></Route>
				<Route path="/placeholder" Component={Placeholder}></Route>
				<Route
					path="/player-detail/:id"
					Component={PlayerDetails}
				></Route>
				<Route path="/abstract" Component={Abstract}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;

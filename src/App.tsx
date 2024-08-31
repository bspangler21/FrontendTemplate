// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FantasyFootballTeam from "./pages/FantasyFootballTeam";
import Header from "./pageComponents/Header";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" Component={FantasyFootballTeam}></Route>
				<Route
					path="/fantasy-football"
					Component={FantasyFootballTeam}
				></Route>
			</Routes>
			{/* <Footer /> */}
		</BrowserRouter>
	);
}

export default App;

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FantasyFootballTeam from "./pages/FantasyFootballTeam";
import Header from "./pageComponents/Header";
import Home from "./pages/Home";
import Placeholder from "./pages/Placeholder";
import Footer from "./pageComponents/Footer";
import Cards from "./pages/Cards";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" Component={Home}></Route>
				<Route
					path="/fantasy-football"
					Component={FantasyFootballTeam}
				></Route>
				<Route path="/cards" Component={Cards}></Route>
				<Route path="/placeholder" Component={Placeholder}></Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;

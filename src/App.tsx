import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
		<BrowserRouter>
			{/* <Header /> */}
			<Routes>
				<Route path="/fantasy-football" Component={Worries}></Route>
				
			</Routes>
			{/* <Footer /> */}
		</BrowserRouter>
  );
}

export default App

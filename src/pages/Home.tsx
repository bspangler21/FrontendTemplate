// import utilStyles from "../styles/util.module.css";
import { useContext } from "react";
import { UserContext } from "../main";

const Home = () => {
	const currentUser = useContext(UserContext);
	console.log(`Current user: ${currentUser}`);
	return (
		<>
			<div className="bg-red-500 p-8 text-white text-4xl">
				<p>This is the home screen</p>
			</div>
		</>
	);
};

export default Home;

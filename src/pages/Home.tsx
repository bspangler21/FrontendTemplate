import utilStyles from "../styles/utilStyles.module.css";
import { useContext } from "react";
import { UserContext } from "../main";

const Home = () => {
	const currentUser = useContext(UserContext);
	console.log(`Current user: ${currentUser}`);
	return (
		<>
			<div className={utilStyles.container}>
				<p>This is the home screen</p>
			</div>
		</>
	);
};

export default Home;

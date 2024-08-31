import { Link } from "react-router-dom";
import { mergeStyleSets } from "@fluentui/react";

const classNames = mergeStyleSets({
	navBar: {
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		width: "100vw",
		paddingBottom: "20px",
		maxWidth: "100%",
		textAlign: "center",
	},
	container: {
		display: "flex",
		flexDirection: "row",
		placeItems: "center",
		justifyContent: "center",
		width: "100vw",
	},
});

const Header = () => {
	return (
		<div className={classNames.navBar}>
			<nav>
				<Link to="/">Home</Link>
				{" | "}
				<Link to="/fantasy-football">Fantasy Football</Link>
			</nav>
		</div>
	);
};

export default Header;

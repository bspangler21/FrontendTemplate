import header from "../styles/header.module.css";
import utilstyles from "../styles/utilStyles.module.css";

const pages = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "Fantasy Football",
		link: "/fantasy-football",
	},
	{
		name: "Placeholder",
		link: "/placeholder",
	},
];

const Header = () => {
	return (
		<div className={utilstyles.container}>
			<div className={header.topnav}>
				{pages.map((page) => (
					<a href={page.link}>{page.name}</a>
				))}
				;
			</div>
		</div>
	);
};

export default Header;

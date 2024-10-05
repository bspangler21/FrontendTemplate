import header from "../styles/header.module.css";

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
		<div className={header.topnav}>
			{pages.map((page) => (
				<a href={page.link}>{page.name}</a>
			))}
			;
		</div>
	);
};

export default Header;

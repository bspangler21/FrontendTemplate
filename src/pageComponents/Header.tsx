// import header from "../styles/header.module.css";

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
		name: "Cards",
		link: "/cards",
	},
	{
		name: "Placeholder",
		link: "/placeholder",
	},
	{
		name: "Abstract",
		link: "/abstract",
	},
	{
		name: "Comments",
		link: "/comments",
	},
	{
		name: "Form",
		link: "/form",
	}
];

const Header = () => {
	return (
		<div className="z-1 bg-primary text-secondary flex flex-row justify-start items-center p-4 gap-4 min-h-[50px]">
			{pages.map((page) => (
				<a
					href={page.link}
					className="hover:text-accent text-secondary"
				>
					{page.name}
				</a>
			))}
		</div>
	);
};

export default Header;

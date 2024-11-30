import { useState } from "react";
import abstractStyles from "../styles/abstractStyles.module.css";

type HelpItem = {
	title: string;
	description: string;
};

const helpItems: HelpItem[] = [
	{
		title: "Branches",
		description:
			"Abstract Branches lets you manage, version, and document your designs in one place.",
	},
	{
		title: "Manage your account",
		description:
			"Configure your account settings, such as your email, profile details, and password.",
	},
	{
		title: "Manage organizations, teams, and projects",
		description:
			"Use Abstract organizations, teams, and projects to organize your work.",
	},
	{
		title: "Manage billing",
		description: "Change subscriptions and payment details.",
	},
	{
		title: "Authenticate to Abstract",
		description:
			"Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
	},
	{
		title: "Abstract support",
		description: "Get in touch with a human.",
	},
];

function searchHelpItems(searchText: string): HelpItem[] {
	console.log(searchText);
	console.log(helpItems);
	return helpItems.filter((item) =>
		item.title.toLowerCase().includes(searchText.toLowerCase())
	);
}

//-- Reference = https://www.frontendpractice.com/projects/abstract
function Abstract() {
	// const [searchText, setSearchText] = useState<string>("");

	return (
		<>
			<div className={abstractStyles.hero}>
				<h2>How can we help?</h2>
				<input
					name="Search"
					type="search"
					id="abstractsearch"
					className={abstractStyles.search}
					onChange={(e) => searchHelpItems(e.target.value)}
				></input>
			</div>
			<div className={abstractStyles.horizontalContainer}>
				{helpItems.map((item) => (
					<div
						className={abstractStyles.helpContainer}
						key={item.title}
					>
						<p className={abstractStyles.helpHeading}>
							{item.title}
						</p>
						<p>{item.description}</p>
						<a className={abstractStyles.learnMore}>Learn More</a>
					</div>
				))}
			</div>
		</>
	);
}

export default Abstract;

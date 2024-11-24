import Header from "../pageComponents/Header";
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

function Abstract() {
	return (
		<>
			<Header />
			<div className={abstractStyles.hero}>
				<h2>How can we help?</h2>
				<input
					name="Search"
					id="abstractsearch"
					className={abstractStyles.search}
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
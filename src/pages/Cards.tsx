import { footballTeam } from "../data/footballTeam";
import { FootballPlayer } from "../types/FootballPlayer";
// import { TableHeader } from "../types/TableHeader";
import utilStyles from "../styles/utilStyles.module.css";
import cardStyles from "../styles/cardStyles.module.css";
import { useNavigate } from "react-router-dom";

const playersList: FootballPlayer[] = footballTeam;

// const tableHeaders: TableHeader[] = [{ name: "Name" }, { name: "Position" }];

const Cards = () => {
	const nav = useNavigate();

	return (
		<>
			<div className={utilStyles.container}>
				<div className={cardStyles.horizontalContainer}>
					{playersList.map((p) => (
						<div
							key={p.id}
							className={cardStyles.card}
							onClick={() => nav(`/player-detail/${p.id}`)}
						>
							<div className={cardStyles.w3CardContainer}>
								<p>
									{p.firstName} {p.lastName}
								</p>
								<p>{p.position}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Cards;

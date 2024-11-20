import { footballTeam } from "../data/footballTeam";
import { FootballPlayer } from "../types/FootballPlayer";
// import { TableHeader } from "../types/TableHeader";
import utilStyles from "../styles/utilStyles.module.css";
import cardStyles from "../styles/cardStyles.module.css";

const playersList: FootballPlayer[] = footballTeam;

// const tableHeaders: TableHeader[] = [{ name: "Name" }, { name: "Position" }];

const Cards = () => {
	return (
		<>
			<div className={utilStyles.container}>
				<div className={cardStyles.horizontalContainer}>
					{playersList.map((p) => (
						<div key={p.id} className={cardStyles.cardContainer}>
							<div className={cardStyles.cardVerticalContainer}>
								<img
									src="https://wallpapercave.com/wp/wp13483150.jpg"
									style={{ height: "100px" }}
									alt="Player image"
								></img><br></br>
								<label>
									{p.firstName} {p.lastName}
								</label>
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

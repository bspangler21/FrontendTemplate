import { footballTeam } from "../data/footballTeam";
import { FootballPlayer } from "../types/FootballPlayer";
import { TableHeader } from "../types/TableHeader";
import utilStyles from "../styles/utilStyles.module.css";


const playersList: FootballPlayer[] = footballTeam;

const tableHeaders: TableHeader[] = [{ name: "Name" }, { name: "Position" }];

const FantasyFootballTeam = () => {
	return (
		<>
			<div className={utilStyles.container}>
				<table className={utilStyles.table}>
					<thead>
						<tr>
							{tableHeaders.map((h) => (
								<th className={utilStyles.th}>{h.name}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{playersList.map((p) => (
							<>
								<tr key={p.id}>
									<td className={utilStyles.td}>
										{p.firstName} {p.lastName}
									</td>
									<td className={utilStyles.td}>
										{p.position}
									</td>
								</tr>
							</>
						))}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default FantasyFootballTeam;

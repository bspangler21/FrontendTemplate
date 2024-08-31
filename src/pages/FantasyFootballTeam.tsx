import { mergeStyleSets } from "@fluentui/react";
import { footballTeam } from "../data/footballTeam";
import { FootballPlayer } from "../types/FootballPlayer";
import { TableHeader } from "../types/TableHeader";

const classNames = mergeStyleSets({
	container: {
		// display: "flex",
		// flexDirection: "row",
		placeItems: "start",
		justifyContent: "start",
		// width: "100vw",
		maxwidth: "100%",
	},
	centeredTableHeader: {
		display: "flex",
		justifyContent: "start",
		alignItems: "start",
		width: "300px",
		// verticalAlign: "start",
		// textAlign: "start",
	},
	headerRow: {
		display: "flex",
		width: "100%",
	},
	tableRow: {
		height: "75px",
		cursor: "pointer",
		width: "300px",
		maxWidth: "300px",
		textAlign: "start",
		justifyContent: "start",
		alignItems: "start",
	},
	row: {
		display: "block",
		textAlign: "start",
	},
});

const playersList: FootballPlayer[] = footballTeam;

const tableHeaders: TableHeader[] = [{ name: "Name" }, { name: "Position" }];

const FantasyFootballTeam = () => {
	return (
		<>
			<div>
				<table>
					<thead>
						<tr className={classNames.headerRow}>
							{tableHeaders.map((h) => (
								<th className={classNames.centeredTableHeader}>
									{h.name}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{playersList.map((p) => (
							<>
								<tr key={p.id}>
									<td className={classNames.tableRow}>
										{p.firstName} {p.lastName}
									</td>
									<td className={classNames.tableRow}>
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

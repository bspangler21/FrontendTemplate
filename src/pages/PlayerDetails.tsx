import { useParams } from "react-router-dom";
import { footballTeam } from "../data/footballTeam";
import { FootballPlayer } from "../types/FootballPlayer";
import { useEffect, useState } from "react";

const playersList: FootballPlayer[] = footballTeam;
// let player: FootballPlayer | undefined;

function PlayerDetails() {
	const { id } = useParams<{ id: string }>();
	const [player, setPlayer] = useState<FootballPlayer | undefined>(undefined);
	console.log(player);
	function getPlayerById(id: string) {
		console.log("id", id);
		return playersList.find((p) => p.id === id);
	}

	useEffect(() => {
		// player = id ? getPlayerById(id) : playersList[0];
		setPlayer(id ? getPlayerById(id) : playersList[0]);
	}, [id]);

	// if (isLoading) {
	// 	return <p>Loading...</p>;
	// }

	// if (!player) {
	// 	return <p>Player not found</p>;
	// }

	return (
		<div>
			<h1>
				{player?.firstName} {player?.lastName}
			</h1>
			<p>{player?.position}</p>
		</div>
	);
}

export default PlayerDetails;

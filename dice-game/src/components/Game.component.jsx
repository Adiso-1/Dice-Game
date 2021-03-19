import React from 'react';
import Button from './Button.component';
import Dice from './Dice.component';
import Player from './Player.component';

class Game extends React.Component {
	state = {
		playerTurn: 0,
		dice: [null, null],
		players: [
			{
				currentScore: 0,
				holdScore: 0,
			},
			{
				currentScore: 0,
				holdScore: 0,
			},
		],
	};

	rollDice = async (e) => {
		const dice1 = Math.floor(Math.random() * 6) + 1;
		const dice2 = Math.floor(Math.random() * 6) + 1;
		let players = [...this.state.players];
		let tempPlayer = { ...players[this.state.playerTurn] };
		if (dice1 === 6 && dice2 === 6) {
			tempPlayer.currentScore = 0;
			players[this.state.playerTurn] = tempPlayer;
			await this.setState({ players });
			this.state.playerTurn === 0
				? (this.state.playerTurn = 1)
				: (this.state.playerTurn = 0);
		} else {
			tempPlayer.currentScore += dice1 + dice2;
			players[this.state.playerTurn] = tempPlayer;
			await this.setState({ players });
		}
		await this.setState({ dice: [dice1, dice2] });
	};

	hold = async () => {
		let players = [...this.state.players];
		let tempPlayer = { ...players[this.state.playerTurn] };
		tempPlayer.holdScore += tempPlayer.currentScore;
		tempPlayer.currentScore = 0;
		players[this.state.playerTurn] = tempPlayer;
		await this.setState({ players });
		this.state.playerTurn === 0
			? (this.state.playerTurn = 1)
			: (this.state.playerTurn = 0);
		console.log(players);
	};
	render() {
		return (
			<div className="game-container">
				<Button
					onClick={(e) => this.rollDice(e)}
					name="ROLL DICE"
					icon={<i className="fas fa-dice"></i>}
				/>
				<Button
					onClick={(e) => this.hold(e)}
					name="HOLD"
					icon={<i className="fas fa-hand-paper"></i>}
				/>
				<Dice score={this.state.dice[0]} />
				<Dice score={this.state.dice[1]} />
				<div className="player-container">
					<Player
						currentScore={this.state.players[0].currentScore}
						name="ADI"
					/>
					<Player
						currentScore={this.state.players[1].currentScore}
						name="SAPIR"
					/>
				</div>
			</div>
		);
	}
}

export default Game;

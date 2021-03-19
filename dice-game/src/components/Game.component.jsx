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
				wins: 0,
			},
			{
				currentScore: 0,
				holdScore: 0,
				wins: 0,
			},
		],
	};
	startState = { ...this.state };
	rollDice = async (e) => {
		const dice1 = Math.floor(Math.random() * 6) + 1;
		const dice2 = Math.floor(Math.random() * 6) + 1;
		let players = [...this.state.players];
		let tempPlayer = { ...players[this.state.playerTurn] };
		if (dice1 === dice2) {
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
		console.log(players[this.state.playerTurn]);
		if (players[this.state.playerTurn].holdScore >= 100) {
		}
		this.state.playerTurn === 0
			? (this.state.playerTurn = 1)
			: (this.state.playerTurn = 0);
	};
	reset = async () => {
		this.setState(this.startState);
	};
	componentDidUpdate(prevProps, prevState) {
		console.log(prevState);
	}
	render() {
		return (
			<div className="game-container">
				<div className="players-container">
					<div className="player player-1">
						<Player
							score={this.state.players[0].holdScore}
							currentScore={this.state.players[0].currentScore}
							name="ADI"
						/>
					</div>
					<div className="dice-container">
						<Dice score={this.state.dice[0]} />
						<Dice score={this.state.dice[1]} />
					</div>
					<div className="player player-2">
						<Player
							score={this.state.players[1].holdScore}
							currentScore={this.state.players[1].currentScore}
							name="SAPIR"
						/>
					</div>
				</div>
				<div className="button-game-container">
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
					<Button
						onClick={(e) => this.reset(e)}
						name="RESET"
						icon={<i className="fas fa-power-off"></i>}
					/>
				</div>
			</div>
		);
	}
}

export default Game;

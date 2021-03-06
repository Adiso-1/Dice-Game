import React from 'react';
import Button from './Button.component';
import Dice from './Dice.component';
import Player from './Player.component';

class Game extends React.Component {
	state = {
		gameFinish: false,
		scoreToWin: 100,
		playerTurn: null,
		dice: [null, null],
		players: [
			{
				name: '',
				currentScore: 0,
				holdScore: 0,
				wins: 0,
			},
			{
				name: '',
				currentScore: 0,
				holdScore: 0,
				wins: 0,
			},
		],
	};
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
		players[this.state.playerTurn] = tempPlayer;
		if (players[this.state.playerTurn].holdScore >= this.state.scoreToWin) {
			tempPlayer.wins += 1;
			players[0].holdScore = 0;
			players[1].holdScore = 0;
			players[this.state.playerTurn] = tempPlayer;
			this.setState({ gameFinish: true });
		}
		tempPlayer.currentScore = 0;
		this.state.playerTurn === 0
			? (this.state.playerTurn = 1)
			: (this.state.playerTurn = 0);
		await this.setState({ players });
	};
	reset = async () => {
		window.location.reload();
	};
	componentDidMount() {
		let players = [...this.state.players];
		players[0].name = this.props.player1Name;
		players[1].name = this.props.player2Name;
		const playerTurn = Math.round(Math.random());
		this.setState({
			players,
			playerTurn,
			scoreToWin: Number(this.props.scoreToWin) || 100,
		});
	}

	componentWillUpdate(prevProps, prevState) {
		if (prevState.gameFinish) {
			setTimeout(() => {
				this.setState({ gameFinish: false });
			}, 1000);
		}
	}

	render() {
		return (
			<div className="game-container">
				<div className="players-container">
					<div className="player player-1">
						<Player
							playerTurn={this.state.playerTurn === 0}
							wins={this.state.players[0].wins}
							score={this.state.players[0].holdScore}
							currentScore={this.state.players[0].currentScore}
							name={this.state.players[0].name}
						/>
					</div>
					<div className="dice-container">
						<Dice score={this.state.dice[0]} />
						<Dice score={this.state.dice[1]} />
					</div>
					<div className="player player-2">
						<Player
							playerTurn={this.state.playerTurn === 1}
							wins={this.state.players[1].wins}
							name={this.state.players[1].name}
							score={this.state.players[1].holdScore}
							currentScore={this.state.players[1].currentScore}
						/>
					</div>
				</div>
				{this.state.gameFinish ? (
					<h2 className="player-win">
						{this.state.playerTurn === 0
							? this.state.players[1].name
							: this.state.players[0].name}{' '}
						WINS
					</h2>
				) : null}
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

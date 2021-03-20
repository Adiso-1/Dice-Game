import React from 'react';
import Game from './components/Game.component';
import Instructions from './components/Instructions.component';
import Button from './components/Button.component';
import Intro from './components/Intro.component';
import './App.css';

class App extends React.Component {
	state = {
		instruction: false,
		gameStart: false,
		player1: 'Player1',
		player2: 'Player2',
		scoreToWin: null,
	};
	startGame = () => {
		this.setState({ gameStart: true });
	};
	onNameChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleInput = (e) => {
		this.setState({ scoreToWin: e.target.value });
	};
	instructions = (e) => {
		this.setState({ instruction: true });
	};
	closeInstructions = (e) => {
		this.setState({ instruction: false });
	};
	render() {
		if (this.state.gameStart) {
			return (
				<div className="app">
					<Game
						player1Name={this.state.player1}
						player2Name={this.state.player2}
						scoreToWin={this.state.scoreToWin}
					/>
				</div>
			);
		} else if (this.state.instruction) {
			return (
				<div className="instructions-container">
					<Instructions onClick={this.closeInstructions} />
				</div>
			);
		} else {
			return (
				<div className="intro">
					<Intro
						handleInput={(e) => this.handleInput(e)}
						value={this.state.scoreToWin}
						onNameChange={(e) => this.onNameChange(e)}
					/>
					<div className="button-game-container start-button">
						<Button onClick={(e) => this.startGame(e)} name="START" />
						<Button onClick={(e) => this.instructions(e)} name="INSTRUCTIONS" />
					</div>
				</div>
			);
		}
	}
}

// 		this.state.gameStart ? (
// 			<div className="app">
// 				<Game
// 					player1Name={this.state.player1}
// 					player2Name={this.state.player2}
// 					scoreToWin={this.state.scoreToWin}
// 				/>
// 			</div>
// 		) : (
// <div className="intro">
// 	<Intro
// 		handleInput={(e) => this.handleInput(e)}
// 		value={this.state.scoreToWin}
// 		onNameChange={(e) => this.onNameChange(e)}
// 	/>
// 	<div className="button-game-container start-button">
// 		<Button onClick={(e) => this.startGame(e)} name="START" />
// 		<Button onClick={(e) => this.instructions(e)} name="INSTRUCTIONS" />
// 	</div>
// </div>
// 		);
// 	}
// }

export default App;

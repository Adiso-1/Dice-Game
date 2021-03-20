import React from 'react';
import Game from './components/Game.component';
import Button from './components/Button.component';
import Intro from './components/Intro.component';
import './App.css';

class App extends React.Component {
	state = {
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
	render() {
		return this.state.gameStart ? (
			<div className="app">
				<Game
					player1Name={this.state.player1}
					player2Name={this.state.player2}
					scoreToWin={this.state.scoreToWin}
				/>
			</div>
		) : (
			<div className="intro">
				<Intro onNameChange={(e) => this.onNameChange(e)} />
				<div className="button-game-container start-button">
					<Button onClick={(e) => this.startGame(e)} name="START" />
				</div>
			</div>
		);
	}
}

export default App;

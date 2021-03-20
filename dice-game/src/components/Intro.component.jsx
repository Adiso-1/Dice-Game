import React from 'react';
import PlayerNameInput from './PlayerNameInput.component';

class Intro extends React.Component {
	render() {
		return (
			<div className="players-settings">
				<form action="">
					<label htmlFor="name">Player 1 Name:</label>
					<PlayerNameInput
						player1={this.props.player1}
						value={this.props.player1}
						onNameChange={this.props.onNameChange}
						name="player1"
					/>
				</form>
				<form action="">
					<label htmlFor="name">Player 2 Name:</label>
					<PlayerNameInput
						player2={this.props.player2}
						value={this.props.player2}
						onNameChange={this.props.onNameChange}
						name="player2"
					/>
				</form>
			</div>
		);
	}
}
export default Intro;

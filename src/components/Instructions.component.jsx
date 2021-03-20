import React from 'react';

class Instructions extends React.Component {
	render() {
		return (
			<div className="instructions">
				<button onClick={this.props.onClick} className="back-btn">
					&#129092; Back
				</button>
				<h3 className="instructions-header">INSTRUCTIONS</h3>
				<h3>
					1. Enter the participant's names. <br />
					2. Enter how many points would youlike to play (by default, the winner
					is the first to achieve 100 points) <br />
					3. At the start, the computer will make a lottery for who is going to
					start.
					<br />
					<br />
					<span className="instructions-header">The game rules are:</span>
					<br />
					Each turn the player rolls two dices, the sum of the dices will
					increment the current score, but, if the player got two dices with the
					same number the current score will change to zero and the turn will
					pass to the second player.
					<br />
					The player now has the option to hold or to play another round, if he
					decides to hold the current score will be his total score and the turn
					will pass to the second player.
					<br />
					The first player who achieved the Pre-determined points wins.
					<br />
					ENJOY AND GOOD LUCK.
				</h3>
			</div>
		);
	}
}
export default Instructions;

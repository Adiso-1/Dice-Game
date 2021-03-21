import React from 'react';

class PlayerScore extends React.Component {
	render() {
		return (
			<div
				className={
					this.props.playerTurn ? 'player-color total-score' : 'total-score'
				}
			>
				<h1>{this.props.name}</h1>
				<h1>{this.props.score}</h1>
			</div>
		);
	}
}

export default PlayerScore;

import React from 'react';
import PlayerScore from './PlayerScore.component';
import CurrentScore from './CurrentScore.component';

class Player extends React.Component {
	render() {
		return (
			<div className="player">
				<h2 className="wins">{`WINS - ${this.props.wins}`}</h2>
				<PlayerScore
					playerTurn={this.props.playerTurn}
					score={this.props.score}
					name={this.props.name}
				/>
				<CurrentScore currentScore={this.props.currentScore} />
			</div>
		);
	}
}

export default Player;

import React from 'react';
import PlayerScore from './PlayerScore.component';
import CurrentScore from './CurrentScore.component';

class Player extends React.Component {
	render() {
		return (
			<div>
				{/* from where the player will get the name should it be hard coded?! */}
				<PlayerScore score={this.props.score} name={this.props.name} />
				<CurrentScore currentScore={this.props.currentScore} />
			</div>
		);
	}
}

export default Player;

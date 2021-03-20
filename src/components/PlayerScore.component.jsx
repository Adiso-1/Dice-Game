import React from 'react';

class PlayerScore extends React.Component {
	render() {
		return (
			<div className="total-score">
				<h1>{this.props.name}</h1>
				<h1>{this.props.score}</h1>
			</div>
		);
	}
}

export default PlayerScore;

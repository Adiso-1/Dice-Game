import React from 'react';

class CurrentScore extends React.Component {
	render() {
		return (
			<div className="current-score">
				<p>Current</p>
				<p>{this.props.currentScore}</p>
			</div>
		);
	}
}
export default CurrentScore;

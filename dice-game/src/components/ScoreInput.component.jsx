import React from 'react';

class ScoreInput extends React.Component {
	render() {
		return (
			<input
				value={this.props.scoreToWin}
				placeholder="100"
				onChange={this.props.handleInput}
				className="score-input"
				type="number"
			/>
		);
	}
}
export default ScoreInput;

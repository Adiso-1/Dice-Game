import React from 'react';

class PlayerNameInput extends React.Component {
	render() {
		return (
			<div action="">
				<input
					placeholder={this.props.name}
					onChange={this.props.onNameChange}
					value={this.props.player1}
					type="text"
					name={this.props.name}
				/>
			</div>
		);
	}
}
export default PlayerNameInput;

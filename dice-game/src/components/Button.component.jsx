import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<button onClick={this.props.onClick}>
				<span>{this.props.name}</span>
				<span>{this.props.icon}</span>
			</button>
		);
	}
}
export default Button;

import React from 'react';
import './Dice.component.css';

class Dice extends React.Component {
	render() {
		const diceOptions = [1, 2, 3, 4, 5, 6];
		return (
			<div>
				{diceOptions.map((score) => {
					if (score === this.props.score) {
						return (
							<img
								key={score}
								className="dice"
								src={process.env.PUBLIC_URL + `/dice-${score}.png`}
								alt={`dice-${score}`}
							/>
						);
					}
				})}
			</div>
		);
	}
}
export default Dice;

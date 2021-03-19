import React from 'react';
import Game from './components/Game.component';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Game />
			</div>
		);
	}
}

export default App;

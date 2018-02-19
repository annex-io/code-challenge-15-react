import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Tiles move around the spaces on the board

function Space(props) {
	return (
		<button className="space" onClick={props.onClick}>
			{props.value == null ? ' ' : props.value}
		</button>
	)
}
// ========================================
class Board extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			tiles: Array.from({length: 16}, () => Math.floor(Math.random() * 15)).fill(null, 15),
		}
	}

	handleClick(i) {
		// move tile
	}

	renderTile(i) {
	    return (
	    	<Space 
	    		value={this.state.tiles[i]} 	    		
	    		onClick={() => alert(i)}
			/>
		);
	}
// ========================================
	render() {
		return (
			<div class="board">
				{this.renderTile(0)}
				{this.renderTile(1)}
				{this.renderTile(2)}
				{this.renderTile(3)}
				{this.renderTile(4)}
				{this.renderTile(5)}
				{this.renderTile(6)}
				{this.renderTile(7)}
				{this.renderTile(8)}
				{this.renderTile(9)}
				{this.renderTile(10)}
				{this.renderTile(11)}
				{this.renderTile(12)}
				{this.renderTile(13)}
				{this.renderTile(14)}
				{this.renderTile(15)}
			</div>
		)
	}
}

class Game extends React.Component {
	render() {
		return (
			<Board />
		)
	}
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

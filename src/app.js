

import {dom} from './app.dom.js'

export function Ship (length) {
	return {
		length: length,
		status: new Array(length).fill(0),
		direction: 0, // DEFAULT: horizontal.
		
		hit (position) {
			this.status[position] = 1
		},
		
		wasHit (position) {
			return this.status[position] == 1
		},
		
		isSunk () {
			return this.status.every((position) => position == 1)
		}
	}
}

export function Gameboard (squares) {
	return {
		grid: new Array(squares).fill(new Array(squares).fill([])),
		attacks: {
			attacked: new Array(squares).fill(new Array(squares).fill(0)),
			successful: new Array(squares).fill(new Array(squares).fill(0)),
			unsuccessful: new Array(squares).fill(new Array(squares).fill(0))
		},
		
		placeShip (row, column, direction = true) {
			
		}
	}
}

export function Player () {
	return {
		
	}
}


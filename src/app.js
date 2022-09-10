
import {dom} from './app.dom.js'

export function Ship (length) {
	const ship = {}
	ship.length = length
	ship.status = new Array(length).fill(0)
	ship.hit = (position) => ship.status[position] = 1
	ship.sunk = () => ship.status.every((position) => position === 1)
	return ship
}

// Create a gameboard with number of squares for row.

export function Gameboard (squares = 10) {
	const gameboard = {}
	gameboard.grid = new Array(squares).fill(new Array(squares).fill([]))
	return gameboard
}

export function Player () {
	
}

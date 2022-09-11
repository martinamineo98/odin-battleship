

import {dom} from './app.dom.js'

export function Ship (length) {
	return {
		length: length,
		status: new Array(length).fill(0),  // DEFAULT: not hit.
		direction: 1, // DEFAULT: horizontal.
		position: {start: null, end: null},
		
		hit (position) {
			this.status[position] = 1
		},
		
		wasHit (position) {
			return this.status[position] == 1
		},
		
		isSunk () {
			return this.status.every((position) => position == 1)
		},
		
		changeDirection (direction) {
			this.direction = (direction) ? 1 : 0
		},
		
		addPosition (start, end) {
			this.position.start = start
			this.position.end = end
		}
	}
}

export function Gameboard (squares) {
	return {
		ships: [],
		grid: new Array(squares).fill(new Array(squares).fill(null)), // null gets replaced with a ship when placed.
		attacks: new Array(squares).fill(new Array(squares).fill(null)), // null gets replaced with 1 (successful attack) and 0 (missed attack) when an attack occurs.
		
		placeShip (ship, row, column) {	
			let start = [row, column]
			let end = []
			
			if (this.grid[row][column]) {
				throw new Error('The choosen square is not empty.')
			} else {
				for (let i = 0; i < ship.length; i++) {		
					end[0] = (Boolean(ship.direction)) ? row : row + i
					end[1] = (Boolean(ship.direction)) ? column + i : column
					this.grid[end[0]][end[1]] = ship
				}
				
				ship.addPosition(start, end)
				this.ships.push(ship)
			}
		},
		
		attackShip (row, column) {
			const ship = this.grid[row][column]
			
			if (ship) {
				const position = ship.position.end[(Boolean(ship.direction)) ? 1 : 0] - (Boolean(ship.direction)) ? column : row
				ship.hit(position)
			}
			
			if (checkIfShipIsSunk(ship)) {
				// TODO: do something when the ship is sunk.
			}
			
			this.attacks[row][column] = (ship) ? 1 : 0
		},
		
		checkIfShipsAreAllSunk () {
			return ships.every((ship) => ship.isSunk == true)
		},
		
		checkIfShipIsSunk (ship) {
			return ship.status.every((position) => Boolean(position))
		}
	}
}

export function Player () {
	return {
		
	}
}


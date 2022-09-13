
export function Ship (length) {
	return {
		direction: 1,
		length: length,
		status: new Array(length).fill(0),
		occupiedSquares: [],
		hit (row, column) {
			this.status[this.getPosition(row, column)] = 1
		},
		isSunk () {
			return this.status.every((position) => position == 1)
		},
		changeDirection (direction) {
			this.direction = (direction) ? 1 : 0
		},
		getPosition (row, column) {
			return this.occupiedSquares.findIndex((square) => {
				return JSON.stringify(square) == JSON.stringify([row, column])
			})
		}
	}
}

export function Gameboard () {
	return {
		grid: new Array(10).fill([]).map(() => [...Array(10).keys()].map(() => null)),
		attacks: new Array(10).fill([]).map(() => [...Array(10).keys()].map(() => null)),
		placeShip (ship, row, col, direction) {
			let squares = []
			let gridSquares = []
			
			for (let i = 0; i < ship.length; i++) {
				let newRow = (direction) ? row : row + i
				let newCol = (direction) ? col + i : col
				squares.push([newRow, newCol])
				gridSquares.push(this.grid[newRow][newCol])
			}
			
			if (gridSquares.some((square) => square !== null)) {
				throw new Error('At least one square is not empty.')
			} else {
				ship.changeDirection(direction)
				ship.occupiedSquares = squares
				
				for (let i = 0; i < squares.length; i++) {
					let newRow = (direction) ? row : row + i
					let newCol = (direction) ? col + i : col
					
					this.grid[newRow][newCol] = ship
				}
			}
		},
		attack (row, col) {
			let ship = this.grid[row][col]
			this.attacks[row][col] = (ship) ? 1 : 0
			
			if (ship) {
				ship.hit(row, col)
			}
			
			if (ship.isSunk()) {
				// TODO: if the ship was sunk do something.
			}
		}
	}
}

export function Player () {
	return {
		
	}
}

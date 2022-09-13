
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
		ships: [],
		checkIfAllShipsAreSunk () {
			return this.ships.every((ship) => ship.isSunk())
		},
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
				this.ships.push(ship)
				
				for (let i = 0; i < squares.length; i++) {
					let newRow = (direction) ? row : row + i
					let newCol = (direction) ? col + i : col
					
					this.grid[newRow][newCol] = ship
				}
			}
		},
		receiveAttack (row, col) {
			let ship = this.grid[row][col]
			this.attacks[row][col] = (ship) ? 1 : 0
			
			if (ship) {
				ship.hit(row, col)
				if (ship.isSunk()) {
					// TODO: if the ship is sunk do something.
				}
			}
			
			if (this.checkIfAllShipsAreSunk()) {
				// TODO: if all ships are sunk do something.
			}
		}
	}
}

export function Player () {
	return {
		attack (gameboard, row, col) {
			gameboard.receiveAttack(row, col)
		}
	}
}

export function Computer () {	
	function randomNumber () {
		return Math.floor(Math.random() * 10)
	}
	
	function randomMove (gameboard) {
		let row = randomNumber()
		let col = randomNumber()
		
		if (gameboard.attacks[row][col] !== null) {
			randomMove(gameboard)
		} else {
			return [row, col]
		}
	}

	return {
		...Player,
		attack (gameboard) {
			let [row, col] = randomMove(gameboard)
			console.log(gameboard.attacks)
			gameboard.receiveAttack(row, col)
			console.log(gameboard.attacks)
		}
	}
}

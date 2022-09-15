
export function Ship (length) {
	function getIndex (array, element) {
		return array.map((x) => JSON.stringify(x)).indexOf(JSON.stringify(element))
	}
	
	return {
		length: length,
		direction: null,
		status: [...Array(length).keys()].map((element) => element = 0),
		squares: [...Array(length).keys()].map((element) => element = null),
		hit (row, col) {
			const pos = getIndex(squares, [row, col])
			if (this.status[pos]) throw new Error('The square was already attacked.')
			this.status[pos] = 1
		},
		isSunk () {
			return this.status.every((element) => element === 1)
		},
		addDirection (direction) {
			this.direction = (direction) ? 1 : 0
		},
		addSquare (index, row, col) {
			this.squares[index] = [row, col]
		}
	}
}

export function Gameboard () {
	
	return {
		grid: [...Array(10).keys()].map((element) => element = [...Array(10).keys()].map((element) => element = null)),
		hits: [...Array(10).keys()].map((element) => element = [...Array(10).keys()].map((element) => element = null)),
		ships: [],
		placeShip (ship, row, col, direction) {
			const squares = []
			const coordinates = []
			
			for (let i = 0; i < ship.length; i++) {
				let _row = (direction) ? row : row + i
				let _col = (direction) ? col + i : col
				squares.push(this.grid[_row, _col])
				coordinates.push([_row, _col])
			}
			
			if (!squares.every((square) => square === null)) {
				throw new Error('At least one square is not empty.')
			}
			
			ship.addDirection(direction)
			this.ships.push(ship)
			
			for (let i = 0; i < coordinates.length; i++) {
				let [_row, _col] = coordinates[i]
				ship.addSquare(i, _row, _col)
			}
		},
		receiveAttack (row, col) {
			let ship = this.grid[row][col]
			this.hits[row][col] = (ship) ? 1 : 0
			if (ship) ship.hit(row, col)
		},
		checkIfAllSunk () {
			let status = []
			this.ships.forEach((ship) => status.push(ship.isSunk()))
			return status.every((ship) => ship === true)
		}
	}
}

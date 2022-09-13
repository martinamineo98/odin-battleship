
export function createGameboard (gameboard, player) {
	const grid = document.createElement('div')
	grid.classList.add('grid')
	document.body.appendChild(grid)
	
	for (let i = 0; i < gameboard.grid.length; i++) {
		for (let j = 0; j < gameboard.grid.length; j++) {
			const square = document.createElement('div')
			square.classList.add('square')
			grid.appendChild(square)
		}
	}
}

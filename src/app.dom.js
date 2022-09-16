
import {turn, changeTurn} from './app.game.js'

let unactive = 'computer'

function changeActiveBoard (_class) {
	const activeBoard = document.querySelector(`.${_class}`)
	const unactiveBoard = document.querySelector(`.${unactive}`)
	
	unactiveBoard.classList.toggle('unactive')
	activeBoard.classList.toggle('unactive')
	
	unactive = _class
	changeTurn()
}

export function createGameboard (gameboard, _class, unactive = false) {
	const container = document.createElement('div')
	container.classList.add('grid', _class)
	document.body.appendChild(container)
	
	if (unactive) {
		container.classList.toggle('unactive')
	}
	
	gameboard.grid.forEach((row, rowIndex) => {		
		row.forEach((_, squareIndex) => {
			const square = document.createElement('div')
			square.classList.add('square')
			square.setAttribute('data-row', rowIndex)
			square.setAttribute('data-col', squareIndex)		
			container.appendChild(square)
		})
	})
	
	addEvent(gameboard, _class)
}

export function addEvent (gameboard, _class) {
	const squares = document.querySelectorAll(`.${_class} .square`)
	squares.forEach((square) => {
		square.addEventListener('click', () => {
			const classes = ['attacked']
			const row = square.getAttribute('data-row')
			const col = square.getAttribute('data-col')
			
			if (gameboard.grid[row][col] === null) classes.push('missed')
			
			changeActiveBoard(_class)
			
			for (let _class of classes) {
				square.classList.add(_class)
			}
		}, {once: true})
	})
}

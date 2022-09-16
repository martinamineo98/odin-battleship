
import {Ship, Gameboard, Player, Computer} from './app.logic.js'
import {createGameboard, addEvent} from './app.dom.js'

// 0 => player
// 1 => computer

export let turn = 0

export function changeTurn () {
	turn = Boolean(turn) ? 0 : 1
}

export default (function game() {	
	
	const computer = new Computer(new Gameboard())
	const player = new Player(new Gameboard())
	
	createGameboard(computer.gameboard, 'computer', true)
	createGameboard(player.gameboard, 'player')
	
	computer.gameboard.placeShip(new Ship(5), 0, 0, 0)
	computer.gameboard.placeShip(new Ship(4), 0, 1, 1)
	computer.gameboard.placeShip(new Ship(3), 1, 5, 0)
	computer.gameboard.placeShip(new Ship(2), 5, 5, 1)
	computer.gameboard.placeShip(new Ship(1), 9, 9, 1)
	
	player.gameboard.placeShip(new Ship(5), 0, 0, 0)
	player.gameboard.placeShip(new Ship(4), 0, 1, 1)
	player.gameboard.placeShip(new Ship(3), 1, 5, 0)
	player.gameboard.placeShip(new Ship(2), 5, 5, 1)
	player.gameboard.placeShip(new Ship(1), 9, 9, 1)
	
	if (player.gameboard.checkIfAllSunk() || computer.gameboard.checkIfAllSunk()) {
		// TODO: do something if all ships are dead.
	}
	
})()

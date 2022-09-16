
import {Ship, Gameboard, Player, Computer} from './app.logic.js'
import {createGameboard} from './app.dom.js'
import {game} from './app.game.js'

describe('Ship', () => {
	
	let ship = new Ship(5)
	
	function returnShipStatus () {
		return ship.status
	}
	
	function returnShipSquares () {
		ship.squares[0] = [0, 0]
		return ship.squares
	}

	function returnIsSunkTrue () {
		ship.status = ship.status.map((element) => element = 1)
		return ship.isSunk()
	}
	function returnIsSunkFalse () {
		ship.status = ship.status.map((element) => element = 0)
		return ship.isSunk()
	}

	test('Return Ship Status', () => expect(returnShipStatus()).toStrictEqual([0, 0, 0, 0, 0]))
	test('Return Ship Squares', () => expect(returnShipSquares()).toStrictEqual([[0, 0], null, null, null, null]))
	test('Return Sunk Status (True)', () => expect(returnIsSunkTrue()).toBe(true))
	test('Return Sunk Status (False)', () => expect(returnIsSunkFalse()).toBe(false))

})

describe('Player & Computer', () => {
	
	const hits = [...Array(10).keys()].map((element) => element = [...Array(10).keys()].map((element) => element = null))
	
	const gameboardPlayer = new Gameboard()
	const gameboardComputer = new Gameboard()
	
	const player = new Player(gameboardPlayer)
	const computer = new Computer(gameboardComputer)
	
	player.attack(0, 0)
	computer.attack()
	
	function returnObject (object) {
		return typeof object
	}
	
	function hasGameboard(object) {
		return object.gameboard === null
	}
	
	function returnHits (object) {
		return object.gameboard.hits
	}
 	
	test('Return a Player Object', () => expect(returnObject(player)).toBe('object'))
	test('Return a Computer Object', () => expect(returnObject(computer)).toBe('object'))

	test('Has the Player Object a gameboard?', () => expect(hasGameboard(player)).toBe(false))
	test('Has the Computer Object a gameboard?', () => expect(hasGameboard(computer)).toBe(false))
	
	test('Return (P) Gameboard\'s hits.', () => expect(returnHits(player)).not.toBe(hits))
	test('Return (C) Gameboard\'s hits.', () => expect(returnHits(computer)).not.toBe(hits))

})

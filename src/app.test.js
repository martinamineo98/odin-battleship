
import {Ship, Gameboard} from './app.logic.js'

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


import {Ship, Gameboard, Player} from './app.js'

test('TODO', () => expect().toBe())

function TEST_shipIsSunk () {
	let ship = new Ship(5)
	ship.status.forEach((x, index) => ship.hit(index))
	return ship.isSunk()
}

function TEST_shipIsNotSunk () {
	let ship = new Ship(5)
	return ship.isSunk()
}

test('The Ship was Sunk', () => expect(TEST_shipIsSunk()).toBe(true))
test('The Ship was not Sunk', () => expect(TEST_shipIsNotSunk()).toBe(false))

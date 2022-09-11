
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

function TEST_changeShipDirectionToHorizontal () {
	let ship = new Ship(5)
	ship.changeDirection(true)
	return ship.direction
}

function TEST_changeShipDirectionToVertical () {
	let ship = new Ship(5)
	ship.changeDirection(false)
	return ship.direction
}

function TEST_placeShip () {
	let gameboard = new Gameboard(10)
	let ship = new Ship(5)
	// gameboard.placeShip(ship, 0, 0)
	console.log(gameboard.grid)
	return ship
}

console.log(TEST_placeShip())

describe('Sunking Ships', () => {
	test('The Ship was Sunk', () => expect(TEST_shipIsSunk()).toBe(true))
	test('The Ship was not Sunk', () => expect(TEST_shipIsNotSunk()).toBe(false))	
})

describe('Changing Directions', () => {
	test('The Ship is now horizontal', () => expect(TEST_changeShipDirectionToHorizontal()).toBe(1))
	test('The Ship is now vertical', () => expect(TEST_changeShipDirectionToVertical()).toBe(0))	
})

// test('Place Ship', () => expect(TEST_placeShip()).toBe('object'))

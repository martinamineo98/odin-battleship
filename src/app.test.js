
import {Ship, Gameboard, Player} from './app.js'

const gameboard = new Gameboard()
const ship = new Ship(5)

gameboard.placeShip(ship, 0, 5, true)
gameboard.attack(0, 5)
gameboard.attack(0, 6)
gameboard.attack(0, 7)
gameboard.attack(0, 8)
gameboard.attack(0, 9)


test('TODO', () => expect().toBe())

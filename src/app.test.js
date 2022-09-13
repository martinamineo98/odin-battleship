
import {Ship, Gameboard, Player, Computer} from './app.js'

const gameboard = new Gameboard()
const ship = new Ship(5)

gameboard.placeShip(ship, 0, 5, true)
// gameboard.receiveAttack(0, 5)
// gameboard.receiveAttack(0, 6)
// gameboard.receiveAttack(0, 7)
// gameboard.receiveAttack(0, 8)
// gameboard.receiveAttack(0, 9)

const computer = new Computer()
computer.attack(gameboard)


test('TODO', () => expect().toBe())

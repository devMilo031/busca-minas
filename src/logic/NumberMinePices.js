import { mineNumbers } from "../constants";

export function minePiece(gameMode) {

    let numberMines = 0

    switch (gameMode) {
        case 'Easy':
            numberMines = Math.floor(Math.random() * mineNumbers.easy)
            console.log(numberMines)
            break

        case 'Medium':
            numberMines = Math.floor(Math.random() * mineNumbers.medium)
            console.log(numberMines)
            break

        case 'Hard':
            numberMines = Math.floor(Math.random() * mineNumbers.hard)
            console.log(numberMines)
            break
    }
    return numberMines
}
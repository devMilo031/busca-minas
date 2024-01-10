/*import { gameMode, mineNumbers } from "../constants"
import { useState } from "react"

export function ButtomGameMode({ difficult }) {

    const [diff, setDifficult] = useState(gameMode.easy)
    const [mines, setMine] = useState(mineNumbers.easy)

    switch (difficult) {
        case 'easy':
            setDifficult(gameMode.easy)
            setMine(mineNumbers)
            break
        case 'medium':
            setDifficult(gameMode.medium)
            setMine(mineNumbers.medium)

            break
        case 'hard':
            setDifficult(gameMode.hard)
            setMine(mineNumbers.hard)

            break
    }
    const handleClick = () => {
        return gameMode.medium
    }

    return (
        <button onClick={handleClick} className="bm-btn-game-mode">{difficult}</button>
    )
    //tratar de hacer que el boton renderice un tablero segun la dificultad que se desee
}*/
import { useState } from "react"
import { gameMode } from "../constants"
import { useDifficult } from "../hooks/useDifficult"

export function ButtomGameMode({ gamemode }) {

    const { difficult, setDifficult } = useDifficult()

    const handleClick = () => {
        if (gamemode === 'Easy') {
            setDifficult(gameMode.easy)
            return
        }
        if (gamemode === 'Medium') {
            setDifficult(gameMode.medium)
            return
        }
        if (gamemode === 'Hard') {
            setDifficult(gameMode.hard)
            return
        }
    }


    return (
        <button onClick={handleClick} className="bm-btn-game-mode">{gamemode}</button>
    )
}
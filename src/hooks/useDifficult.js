import { useState } from "react"
import { gameMode } from "../constants"

export function useDifficult() {
    const [difficult, setDifficult] = useState(gameMode.easy)

    return { difficult, setDifficult }
}
import { useState, useEffect } from "react"
import { MATCHES } from "../constants"
import { useDifficult } from "./useDifficult"

export function useBoard() {
    const [clicked, setClicked] = useState([])
    const [status, setStatus] = useState('playing')
    const { difficult } = useDifficult()

    const [board, setBoard] = useState(
        Array.from({ length: difficult }, () => Array.from({ length: difficult }, () => 0))
    )

    function handleClick(rowIndex, cellIndex) {
        if (clicked.length + 1 === difficult ** 2 - difficult) {
            setStatus('won')
        } else if (board[rowIndex][cellIndex] === 'B') {
            setStatus('lost')
        }
        setClicked(clicked => clicked.concat(`${rowIndex}-${cellIndex}`))
    }
    useEffect(() => {
        for (let count = difficult; count > 0; count--) {
            const rowRandom = Math.floor(Math.random() * difficult)
            const cellRandom = Math.floor(Math.random() * difficult)
            board[rowRandom][cellRandom] = 'B'
            for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
                for (let cellIndex = 0; cellIndex < board[rowIndex].length; cellIndex++) {
                    if (board[rowIndex][cellIndex] === 'B') continue;

                    let bombCount = 0

                    for (const match of MATCHES) {
                        if (board[rowIndex + match[0]]?.[cellIndex + match[1]] === 'B') {
                            bombCount++
                        }
                    }
                    board[rowIndex][cellIndex] = bombCount
                }
            }
        }
    }, [board])

    useEffect(() => {
        setBoard(Array.from({ length: difficult }, () => Array.from({ length: difficult }, () => 0)))
    }, [difficult])

    return { board, handleClick, clicked, status }
}
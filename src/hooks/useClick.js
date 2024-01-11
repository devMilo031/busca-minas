// import { useState } from "react"
// import { useDifficult } from "./useDifficult"

// export function useClick({ board }) {
//     const { difficult } = useDifficult()
//     const [clicked, setClicked] = useState([])
//     const [status, setStatus] = useState('playing')

//     function handleClick(rowIndex, cellIndex) {
//         if (clicked.length + 1 === difficult ** 2 - difficult) {
//             setStatus('won')
//         } else if (board[rowIndex][cellIndex] === 'B') {
//             setStatus('lost')
//         }
//         setClicked(clicked => clicked.concat(`${rowIndex}-${cellIndex}`))
//     }
//     return { clicked, handleClick, status }
// }
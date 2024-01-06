import './App.css'

import { useState } from 'react'
import { gameMode, PIECES, piecesNumbers } from './constants'
import { ButtomGameMode } from './components/ButtomGameMode'
import { Square } from './components/Square'

function App() {

  const [board, setBoard] = useState(() => Array(gameMode.easy).fill(null))
  const [piece, setPiece] = useState(PIECES.free)

  const [mine, setMine] = useState(() => {
    let boardMines = [...board]
    boardMines = Math.floor(Math.random() * piecesNumbers.easy)
    return boardMines
  })
  console.log(mine)

  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index]
    setBoard(newBoard)
    setPiece(PIECES.free ? PIECES.mine : PIECES.free)
  }

  return (
    <main className='bm-game'>
      <h1>Busca minas</h1>
      <div className='bm-game-mode'>
        <ButtomGameMode />
      </div>
      <section className='bm-board bm-easy-mode'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
                isSelected={piece === PIECES.mine}
              >
                {piece}
              </Square>

            )
          })
        }
      </section>
      <section className='bm-resetGame'>
        <button className='bm-resetGame-btn'>Reset</button>
      </section>
    </main>
  )

}

export default App

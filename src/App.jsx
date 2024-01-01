import './App.css'

import { useState } from 'react'
import { gameMode, PIECES } from './constants'
import { ButtomGameMode } from './components/ButtomGameMode'
import { Square } from './components/Square'

function App() {

  const [board, setBoard] = useState(() => Array(gameMode.easy).fill(null))
  const [mina, setMina] = useState(PIECES.blanco)

  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index]
    setBoard(newBoard)
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
                isSelected={mina === PIECES.mina}
              >
                {mina ? PIECES.mina : PIECES.blanco}
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

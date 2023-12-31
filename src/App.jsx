import './App.css'

import { useState } from 'react'
import { gameMode } from './constants'
import { ButtomGameMode } from './components/ButtomGameMode'
import { Square } from './components/Square'

function App() {

  const [board, setBoard] = useState(() => Array(gameMode.easy).fill(null))
  
  return (
    <main className='bm-game'>
      <h1>Busca minas</h1>
      <div className='bm-game-mode'>
        <ButtomGameMode/>
      </div>
      <section className='bm-board bm-easy-mode'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
              >
                {index}
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

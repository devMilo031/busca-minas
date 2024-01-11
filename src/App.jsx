import './App.css'

import { PIECES } from './constants'
import { ButtomGameMode } from './components/ButtomGameMode'
import { useBoard } from './hooks/useBoard'

function App() {

  const { board, handleClick, clicked, status } = useBoard()

  const resetGame = () => {
    location.reload()
  }

  return (
    <main className='bm-game'>
      <h1>Busca minas</h1>
      <div className='bm-game-mode'>
        <ButtomGameMode gamemode={'Easy'} />
        <ButtomGameMode gamemode={'Medium'} />
        <ButtomGameMode gamemode={'Hard'} />
      </div>
      <section>
        <section className=' bm-easy-mode'>
          {
            board.map((row, rowIndex) => (
              <article className='bm-rows' key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <div className="bm-cells" key={`${rowIndex}-${cellIndex}`}>
                    {clicked.includes(`${rowIndex}-${cellIndex}`) ? (<span>{cell === 'B' ? PIECES.mine : cell === 0 ? null : cell}</span>
                    ) : (
                      <div className='bm-buttom-game' onClick={() => status === 'playing' && handleClick(rowIndex, cellIndex)} />
                    )}
                  </div>
                ))}
              </article>
            ))
          }
        </section>
        {status === 'lost' && <p>You lost</p>}
        {status === 'won' && <p>You won </p>}
      </section>
      <section className='bm-resetGame'>
        <button onClick={resetGame} className='bm-resetGame-btn'>Reset</button>
      </section>
    </main>
  )

}

export default App

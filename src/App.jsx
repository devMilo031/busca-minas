import './App.css'

import { useState, useEffect } from 'react'
import { gameMode, PIECES, MATCHES, mineNumbers } from './constants'
import { ButtomGameMode } from './components/ButtomGameMode'


const board = Array.from({ length: gameMode.easy }, () => Array.from({ length: gameMode.easy }, () => 0))
for (let count = mineNumbers.easy; count > 0; count--) {
  const rowRandom = Math.floor(Math.random() * mineNumbers.easy)
  const cellRandom = Math.floor(Math.random() * mineNumbers.easy)
  board[rowRandom][cellRandom] = 'B'
}

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
function App() {
  const [clicked, setClicked] = useState([])
  const [status, setStatus] = useState('playing')

  function handleClick(rowIndex, cellIndex) {
    if (clicked.length + 1 === gameMode.easy ** 2 - gameMode.easy) {
      setStatus('won')
    } else if (board[rowIndex][cellIndex] === 'B') {
      setStatus('lost')
    }

    setClicked(clicked => clicked.concat(`${rowIndex}-${cellIndex}`))
  }

  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index]
    setBoard(newBoard)
  }
  const resetGame = () => {
    setBoard(Array(gameMode.easy).fill(null))
    setPiece(PIECES.onPiece)
  }

  return (
    <main className='bm-game'>
      <h1>Busca minas</h1>
      <div className='bm-game-mode'>
        <ButtomGameMode />
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
                      <button onClick={() => status === 'playing' && handleClick(rowIndex, cellIndex)} className='bm-buttom-game' />
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

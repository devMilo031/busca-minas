/*import { gameMode } from "../constants"
import { BoardGame } from "./BoardGame"*/

export function ButtomGameMode() {
    /*    const bmSelectGameMode = getElementById('bmSelectGameMode')
        let gameModeSwitch = bmSelectGameMode.value
        switch (gameModeSwitch) {
            case 1:
                setBoard(Array(gameMode.easy).fill(null))
                break
            case 2:
                setBoard(Array(gameMode.medium).fill(null))
                break
            case 3:
                setBoard(Array(gameMode.hard).fill(null))
                break
        }
    */
    return (
        <select name="bm-select-game-mode" id="bmSelectGameMode">
            <option value="1">Easy</option>
            <option value="2">Medium</option>
            <option value="3">Hard</option>
        </select>
    )
    //tratar de hacer que el boton renderice un tablero segun la dificultad que se desee
}
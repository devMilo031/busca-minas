//import { useState } from "react"


export function Square({index, children, updateBoard, isSelected}) {
    //Asignamos la clase al componente dependiendo del estado que se asigne    
    const className = `square ${isSelected ? 'isSelected' : ''}`

    const handleClick = () => {
        console.log('Diste click')
        updateBoard(index)
    }
    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}
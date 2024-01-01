import { useState } from "react"

export function Square({index, children, updateBoard, isSelected}) {

    const [square,setSqaure] = useState(()=>{
        
    })

    const className = `square ${isSelected ? '' : 'isSelected'}`
    
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
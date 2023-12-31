export function Square({index, children}) {
    const handleClick = () => {
        console.log('Diste click')
    }

    index=0
    console.log(index)
    return (
        <div onClick={handleClick} className="testHandleClick">
            {children}
        </div>
    )
}
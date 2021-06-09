export function ActionButton({handleStopClick, begin, handleWaitClick, handleResetClick, style, isRunning}) {
    return (
        <div style={style}>
            <button onClick={handleStopClick}>Stop</button>
            <button onClick={begin} disabled={isRunning}>Start</button>
            <button onDoubleClick={handleWaitClick}>Wait</button>
            <button onClick={handleResetClick}>Reset</button>
        </div>
    )
}
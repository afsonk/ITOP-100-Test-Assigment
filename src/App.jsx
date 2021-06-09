import {useState, useEffect} from 'react'
import {ActionButton} from './ActionButton'
import {Display} from "./Display"

const style = {
    container: {
        maxWidth: '600px',
        width: '100%',
        margin: '200px auto 0',
        fontSize: '36px',
    },
    timer: {
        display: 'flex',
        justifyContent: 'center',
        gridGap: '20px',
        marginBottom: '50px'
    },
}

export function App() {
    const [time, setTime] = useState({hours: 0, minutes: 0, seconds: 0})
    const [isRunning, setIsRunning] = useState(false)

    let seconds = time.seconds;
    let minutes = time.minutes;
    let hours = time.hours;

    let interval;

    const intervalFunction = () => {
        interval = setInterval(begin, 1000)
    }

    const begin = () => {
        setIsRunning(true)
        if (seconds < 60) {
            ++seconds
        }
        if (seconds === 60) {
            seconds = 0
            ++minutes
        }
        if (minutes === 60) {
            seconds = 0
            minutes = 0
            ++hours
        }
        return setTime({...time, hours, minutes, seconds})
    }

    const handleWaitClick = () => {
        setIsRunning(false)
    }


    const handleStopClick = () => {
        clearInterval(interval)
        setTime({...time, hours: 0, minutes: 0, seconds: 0})
        setIsRunning(false)
    }

    const handleResetClick = async () => {
        await clearInterval(interval)
        setIsRunning(false)
        setTime({...time, hours: 0, minutes: 0, seconds: 0})
        setIsRunning(true)
    }


    const lessThanTen = (time) => {
        return time >= 10 ? time : `0${time}`
    }

    useEffect(() => {
        if (isRunning) {
            intervalFunction()
            return () => clearInterval(interval)
        }
    }, [isRunning])

    return (
        <>
            <div style={style.container}>
                <Display time={time} style={style.timer} lessThanTen={lessThanTen}/>
                <ActionButton handleStopClick={handleStopClick}
                              begin={begin}
                              handleWaitClick={handleWaitClick}
                              handleResetClick={handleResetClick}
                              style={style.timer}
                              isRunning={isRunning}
                />
            </div>
        </>
    )
}

// onClick={}
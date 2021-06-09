

export function Display({time, style, lessThanTen}){
    return(
        <div style={style}>
            <span>{lessThanTen(time.hours)}</span>
            <span>{lessThanTen(time.minutes)}</span>
            <span>{lessThanTen(time.seconds)}</span>
        </div>
    )
}
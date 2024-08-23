import React, {useEffect, useState} from 'react';
import s from './ClockSuper.module.css'

type ClockSuperPropsType = {
    title: string,
    datediff: number,
}

export const ClockSuper = (props: ClockSuperPropsType) => {
    const {title, datediff} = props;
    const [seconds, setSecond] = useState('');
    const [minutes, setMinutes] = useState('');
    const [hours, setHours] = useState('');

    const formatTime = (time: number) => {
        return time < 10 ? `0${time}` : `${time}`;
    }

    const secondsStyle = {
        transform: `rotate(${Number(seconds) * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${Number(minutes) * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${Number(hours) * 30}deg)`
    };

    useEffect(() => {
        let interval = setInterval(() => {
            const date = new Date();
            date.setHours(date.getHours() + datediff);
            let hours = formatTime(date.getHours());
            let minutes = formatTime(date.getMinutes());
            let seconds = formatTime(date.getSeconds());
            setSecond(seconds);
            setMinutes(minutes)
            setHours(hours)
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    return (
        <div className={s.clock}>
            <h3>{title}</h3>
            <div className={s.analogClock}>
                <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}/>
                <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}/>
                <div className={`${s.dial} ${s.hours}`} style={hoursStyle}/>
            </div>
            <div className={s.digitalClock}>
                {hours}:{minutes}:{seconds}
            </div>
        </div>
    );
};
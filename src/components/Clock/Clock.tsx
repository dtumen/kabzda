import React, {useEffect, useState} from 'react';

const get2digitsString = (num: number) => num < 10 ? "0" + num : num;
export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        let timeoutId = setInterval(() => {
            setDate(new Date());
        }, 1000)

        return () => clearInterval(timeoutId);

    }, []);

    let seconds = get2digitsString(date.getSeconds());
    let minutes = get2digitsString(date.getMinutes());
    let hours = get2digitsString(date.getHours());

    return (
        <div>
            <span>{hours}</span>
            :
            <span>{minutes}</span>
            :
            <span>{seconds}</span>
        </div>
    );
};
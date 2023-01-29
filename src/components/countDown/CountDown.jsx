import React, { useEffect, useState } from 'react'

const CountDown = () => {

    const [time, setTime] = useState("");

    useEffect(() =>{
        let countDownDate = new Date("March 4, 2023 00:00:00").getTime();
        let x = setInterval(() => {
            let now = new Date().getTime();
            let distance = countDownDate - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        

            if (distance < 0) {
                clearInterval(x);
                setTime("Cuenta atrás finalizada")
            }

        }, 1000);
    },[]);


  return (
    <div className='count-down'>{time}</div>
  )
}

export default CountDown
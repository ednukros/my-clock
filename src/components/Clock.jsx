import React, { useEffect, useState } from 'react'
import './clock.scss'

const Clock = () => {

    const [hourState, setHourState] = useState();
    

    useEffect(() => {
        setInterval(() => {
            
            const date = new Date();
            setHourState(date.toLocaleTimeString());
            

        }, 1000);
    }, []);

  return (
    
    <div className='clock'>
       
        <h2>{hourState}</h2>
    </div>

  )
}

export default Clock
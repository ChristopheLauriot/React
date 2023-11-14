import React,{useState} from 'react'
import ShowCounterValue from './ShowCounterValue'

function Counter() {
    const [count, setCount] = useState(0)
    
    function handleClick(){
        setCount(count+1)

    }
    console.log("render Counter")
    return (
        <>
            <h2>Counter</h2>
            count : {count} - <ShowCounterValue count={count}/>
            <button onClick={handleClick}>+</button>
        </>
    )
}

export  default Counter

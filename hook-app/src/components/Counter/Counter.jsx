import React,{useState} from 'react'
import ShowCounterValue from './ShowCounterValue'

function Counter() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [show, setShow] = useState(true)
    
    function handleClick(){
        setCount(count+1)

    }
    function handleClick2(){
        setCount2(count2+1)

    }
    function handleShow(){
        setShow(previousShow => !previousShow)

    }
    console.log("render Counter")
    return (
        <>
            <h2>Counter</h2>
            <button onClick={handleShow}>{show?"hide":"show"}</button>
            <br/>
            {show && 
            <>
                count : {count} - <ShowCounterValue count={count} count2={count2}/>
            </>
            }
            <button onClick={handleClick}>+</button>
            <button onClick={handleClick2}>+ count2</button>
        </>
    )
}

export  default Counter

import React,{useEffect} from 'react'

function ShowCounterValue(props) {

    useEffect(() => {
        console.log("ShowCounterValue didmount 01",props)

        return ()=>{
            console.log("ShowCounterValue cleanup 01")

        }
    },[])

    useEffect(() => {
        console.log("ShowCounterValue useEffect 02  ",props)
        return ()=>{
            console.log("ShowCounterValue cleanup 02")

        }        
    },[props.count2])


    console.log("render ShowCounterValue")
    return (
        <div>
            <strong>count : {props.count}</strong>
            <br/>
            <strong>count2 : {props.count2}</strong>
        </div>
    )
}

export default ShowCounterValue

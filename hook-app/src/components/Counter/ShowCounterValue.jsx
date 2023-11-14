import React from 'react'

function ShowCounterValue(props) {
    console.log("render ShowCounterValue")
    return (
        <div>
            <strong>{props.count}</strong>
        </div>
    )
}

export default ShowCounterValue

import React from 'react'

function Hello({ firstName, name }) {
    // const {firstName,name}= props
    // console.log(props)
    const toShow = ""


    

    return (
        <>
            Hello {firstName} {name}
            <hr />
            {toShow ? "OK toShow" : "KO toShow"}
            <hr />
            {toShow && <div><h2>ok toShow</h2></div>}
            {!toShow && "not OK toShow"}
        </>
    )
}

export default Hello

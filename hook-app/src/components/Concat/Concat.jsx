import { useState,useMemo } from 'react'


function wait(t){
    const end = Date.now()+t
    while(Date.now()<end);

}

function toUpper(v){
    console.log(v)
    wait(500)
    return v.toUpperCase()
}

function Concat() {
    const [name, setName] = useState("the name")
    const [firstName, setFirstName] = useState("the firstName")

    const doChange = event =>{
        console.log(event.target.name)
        const value = event.target.value

        switch(event.target.name){
            case "name":
                setName(value)
                break
            case "firstName":
                setFirstName(value)
                break
        }
    }

    // const upperName = toUpper(name)
    const upperName = useMemo(() => toUpper(name),[name] )


    return (
        <>
            <h2>Concat</h2>
            <br/>
            <input type="text" name="name" value={name} onChange={doChange}/>
            <input type="text" name="firstName" value={firstName} onChange={doChange}/>

            <br/>
            Name : {name} 
            <br/>
            upperName : {upperName}
            <br/>
            firstName : {firstName}
        </>
    )
}

export default Concat

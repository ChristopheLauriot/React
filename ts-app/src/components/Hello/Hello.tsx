export interface HelloProps{
    firstName:string
    name:string
    // doDelete:(todo:Todo)=>void
}
// function Hello(props) {
// function Hello(props:HelloProps) {
function Hello( {firstName,name}:HelloProps) {
    // const {firstName,name}= props
    // console.log(props)
    // const firstName = props.firstName
    // const name = props.name
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

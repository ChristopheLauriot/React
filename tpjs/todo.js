


function getTodo(id, t) {

    const p = new Promise((resolve, reject) => {

        setTimeout(() => {
            const todo = {
                id,
                title: `Todo id : ${id}`,
                completed: false
            }
            if(id>0){

                resolve(todo)
            }
            else{
                reject({error:"id<0"})
            }
        }, t)
    })


    return p
}

const pTodo = getTodo(0)

pTodo.then(todo => {}).catch(err=>console.error(err))



// pTodo.then(todo => {
//     console.log(todo)
//     return getTodo(todo.id + 1)
// }).then(todo => {
//     console.log(todo)
//     return getTodo(todo.id + 1)
// }).then(todo => {
//     console.log(todo)
//     return getTodo(todo.id + 1)
// }).then(todo => {
//     console.log(todo)
//     return getTodo(todo.id + 1)
// })

// const pTodo1 = getTodo(1,1000)
// const pTodo2 = getTodo(2,200)
// const pTodo3 = getTodo(3,1300)
// const pTodo4 = getTodo(4,4000)
// Promise.all([pTodo1,pTodo2,pTodo3,pTodo4]).then(arr => console.log(arr))



async function main() {

    // const todo1 = await getTodo(1,1000)
    // console.log(todo1)
    // const todo2 = await getTodo(2,200)
    // console.log(todo2)
    // const todo3 = await getTodo(3,1300)
    // console.log(todo3)
    // const todo4 = await getTodo(4,4000)
    // console.log(todo4)

    try{
        const pTodo1 = getTodo(1, 1000)
        const pTodo2 = getTodo(0, 200)
        const pTodo3 = getTodo(3, 1300)
        const pTodo4 = getTodo(4, 4000)
        pAll = Promise.all([pTodo1, pTodo2, pTodo3, pTodo4])
        const arr = await pAll
        console.log(arr)
    
    }
    catch(err){
        console.error(err)
    }
}



main()
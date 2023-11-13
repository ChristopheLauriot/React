

function theFunction() {
    if (true) {

        let a = 2
        console.log(a)
        a = 34
    }
}
// console.log(window) // dans un navigateur

theFunction()



const a = [10, 20, 30]
const b = []

for (const v of a){
    b.push(v*2)
}
console.log(a)
console.log(b)


// function mult2(v){
//     return v*2
// }
function mult2(v){
    return v*2
}

const f = (v)=>v*2
// const c = a.map(mult2)
// const c = a.map(f)
const c = a.map(v=>v*2)
console.log("c",c)


const a2 = [1,2,3,4,5,6]
const c2 = a2.filter(v=>v%2==0)
console.log("c2",c2)



const a3 = [1,2,3,4,5,6]
const c3 = a3.reduce((v1,v2)=>v1+v2)
console.log("c3",c3)


const a4 =  [1,2,3,4,5,6]
const [c4,d4,e4,...all] = a4
console.log(c4,d4,e4)
console.log(all)

obj = {
    name:"GAURAT",
    firstName:"Frédéric",
    id:12,
    age:47
}

const {name,id,...lereste} = obj
console.log(name)
console.log(id)
console.log(lereste)

// // const {firstName,name} = obj
// function sayHello({firstName,name}){
//     console.log("Bonjour",firstName,name)
// }

// sayHello(obj)

const data = [
    { name: "Sujeito", age: 23, salary: 4000, active: true, team: "FrontEnd", bonus: 0 },
    { name: "José", age: 36, salary: 3000, active: true, team: "backEnd", bonus: 0 },
    { name: "Ana Caroline", age: 32, salary: 6000, active: true, team: "Mobile", bonus: 0 },
    { name: "Bauer", age: 28, salary: 3500, active: true, team: "FrontEnd", bonus: 0 },
    { name: "Matheus", age: 22, salary: 2500, active: false, team: "Mobile", bonus: 0 },
]

// Find
/*const user = data.find((user) => {
    return user.age >= 25
})
console.log(user)*/


// Filter
/*const user = data.filter((user) => {
    return user.salary >=4000 && user.active;; 
})

console.log(user)*/


// find index 
/*const indexUser = data.findIndex((user) => {
    return user.name === "Bauer"
})

console.log(indexUser)
console.log(data[indexUser].active = false)
console.log */


// Map
/*const users = data.map ((nigga, index) => {

    if(nigga.salary <= 3000){
        nigga.salary += 900,
        nigga.bonus += 1;
    }

    
    if(nigga.bonus >= 1) {
        nigga.salary *= 1.03
    }

    return {
        name: nigga.name,
        salary: nigga.salary,
        bonus: nigga.bonus
    }
})

console.log(users)*/

// Reverse

//console.log(data.reverse())

// Some (Tem algum assim? Vai retornar true ou false)
/*const inactiveUser = data.some((niggas) =>{
    return niggas.active === false 

}) 

if(inactiveUser === true){
    console.log("tem porra")
}*/

// Every (todo mundo  igual? True ou false)
/*const usersActive = data.every((user) => {
    return user.active === true
})

console.log(usersActive)*/

// Reduce
const users = data.reduce((total, user) => {
    return total += user.salary
}, 0) // total vai começar com 0

console.log(users)
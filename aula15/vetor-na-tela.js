let num = [8, 1, 7, 4, 2, 9]
num.sort()
//console.log(num)

/*
console.log(num[0]) 
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])


for(let pos = 0; pos < num.length; pos++) { // a variavel pos vai começar no 0. ali no log ele vai mostrar o valor de pos e depois o valor do vetor(num) na posição pos.
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)// EX: a posição 0 tem o valor de num na posição 0 
} 
*/

for(let pos in num) { // para cada POSIÇÃO em NUM, eu vou MOSTRAR a POSIÇÃO do NUM.
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
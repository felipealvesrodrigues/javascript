let num = [5, 8, 2, 9, 3]  
num.push(1)
num.sort()
console.log(num)
console.log (`o vetor tem ${num.length} posições`)	
console.log (`o primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(9) // o indexOf vai procurar o valor 8 dentro do vetor e vai retornar a posição dele. se não encontrar, retorna -1.
if (pos == -1) {
    console.log (`o valor não foi encontrado`)
} else {
    console.log (`o valor está na posição ${pos}`)
}

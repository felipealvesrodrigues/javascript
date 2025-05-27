let num = [3, 7, 1, 9, 4]
let res = 0

for(let soma = 0; soma<num.length; soma++) { // Vê todos os índices do array num
    res += num[soma] // Pega os os valores de cada índice de num (num[soma]) e soma ao valor atual de res. Faz isso em looping até acabar os números de num
}

console.log(res)
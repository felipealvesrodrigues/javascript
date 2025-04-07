let num = document.getElementById("txtnum")
let lista = document.getElementById("flista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista (n, l) {
    if (l.indexOf(Number(n)) != -1) { //  indexOf procura por um valor no array l e transforma em número. Se o valor for encontrado, ele retorna a posição (índice) em que ele aparece. Se o valor não estiver na lista, ele retorna -1.

        return true //Se indexOf não retornar -1, então o valor foi encontrado, e o if entra no bloco true.
    } else {
        return false
    }
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { //num.value pega o valor digitado na let num. se ele n esta em lista
        valores.push(Number(num.value)) //adiciona o q ta dentro de num em valores[]
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item) // mostre item na lista
        res.innerHTML = ''
    } else {
        alert("Valor inválido ou já encontrado na lista.");
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de começar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {// Esse 'for' percorre cada posição (índice) do array 'valores'. Exemplo: se 'valores' = [4, 8, 1], 'pos' será "0", "1", "2"
            soma += valores[pos]
            if (valores[pos] > maior) //Se o valor atual (valores[pos]) for maior que o valor guardado em maior, ele atualiza maior
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }    
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} número(s) cadastrado(s)</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando tudo, temos: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é: ${media}</p>`

    }
}

/*
Você tem uma caixinha com números dentro. Vamos dizer que esses números estão guardados em uma lista chamada valores.

Por exemplo:

valores = [5, 8, 2, 10]

Agora você quer descobrir qual é o maior número dessa lista. Como você faz isso?

Você começa olhando para o primeiro número (que é o 5) e pensa:

"Por enquanto, esse é o maior número que eu vi."

Então você guarda esse número em uma variável chamada maior.

Agora, você vai olhar um por um os outros números da lista e comparar:

Comparação passo a passo
Você já guardou o 5 como o maior até agora.

Agora olha o próximo número: 8

Pergunta: 8 é maior que 5?

Resposta: Sim!

Então você troca o que estava guardado em maior por 8.

Próximo número: 2

2 é maior que 8?

Não!

Então você não faz nada, continua com o 8.

Último número: 10

10 é maior que 8?

Sim!

Atualiza maior para 10.

Isso é o que essa linha faz:

if (valores[pos] > maior)
    maior = valores[pos]
Ela está dizendo:

"Se o número que eu estou olhando agora (valores[pos]) for maior do que o número que eu já guardei como o maior (maior), então troque o valor de maior por esse novo número."

🔁 Esse processo acontece para cada número da lista. No final, você vai ter guardado o maior número de todos.

Se quiser, posso animar isso com uma tabelinha ou transformar em um código com console.log pra você ver passo a passo. Quer?*/ 
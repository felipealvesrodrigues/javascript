//quando eu apertar o botão isso aq tudo vai ser executado, ou seja, a função vai ser chamada.
function gerarTabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // aqui ele vai limpar o select toda vez que clicar no botão, pra não criar uma tabuada em cima da outra e gerar um scroll.
        while (c <= 10) {
            let item = document.createElement('option') // mesma coisa de eu ter ido no html e ter criado um option, so que ele n vai ser mostrado.
            item.text = `${n} x ${c} = ${n*c}` // aqui ele vai escrever dentro da option e fazer os calaculos.
            item.value = `tab${c}` // aqui ele vai dar um nomezinho(value) pra cada option criada, ou seja, o valor vai ser tab1, tab2, tab3 e assim por diante. Vai ser útil pra outras linguagens de programação, como o PHP.
            tab.appendChild(item)// aqui ele vai fazer o option criado na primeira linha ser mostrado la no select pro usuário.
            c++

        }

        let finalItem = document.createElement('option') // aqui vai ser criado uma option dentro do select.
        finalItem.text = 'Tabuada completa!' // aqui ele vai colocar o texto dentro do option, capturando a option pelo nome da let (var) finalItem.
        tab.appendChild(finalItem) // aqui ele vai fazer a finalItem ser visível no select.
    }
}




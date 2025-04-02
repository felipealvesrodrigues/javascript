function contar() {
    let ini = document.getElementById('inicio') //linka com o input.
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById ('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível contar`
        //alert('[ERRO] Dados faltando')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value) // pega oq linkou com o input (ini) e transforma em número.
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} 	\u{1F449}`
        }
        
        } else { 
            //Contagem resgressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
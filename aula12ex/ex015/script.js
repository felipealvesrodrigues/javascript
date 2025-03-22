function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector ('div#res')
    if (fano.value.length == 0 || fano.value > ano || fano.value < 1900) {
        window.alert ('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) { //se o botão 0 (masculino, pq ele vem primiero, ent é o 0) estiver marcado
            gênero = 'Homem'
            if (idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'chomem.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'mhomem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'ahomem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'vhomem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12){
                //Criança
                img.setAttribute('src', 'cmulher.png')
            }else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'mmulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'amulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'vmulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}
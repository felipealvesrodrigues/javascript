function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} hora(s)`
    if (hora >= 6 && hora < 12) {
        //BOM DIA!
        img.scr = 'manha.png'
        document.body.style.background = '#B6AC2C'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#D83E01'
    } else {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#162640'
    }
}

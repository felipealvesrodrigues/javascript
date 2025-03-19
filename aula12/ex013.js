var agora = new Date()
var diaSem = agora.getDay()


 /*
    0 == Domingo
    1 == Segunda
    2 == Terça
    3 == Quarta
    4 == Quinta
    5 == Sexta
    6 == Sábado
 */

/* Para não ter q fazer uma estrutura cheia de if, por ex: if (diaSem == 0){console.log(Domingo)} a gente usa o switch */

switch(diaSem) {
    case 0: 
        console.log(`Domingo`)
        break
    case 1:
         console.log(`Segunda-feira`)
         break
    case 2:
         console.log(`Terça-feira`)     
         break
    case 3: 
        console.log(`Quarta-feira`)     
        break
    case 4: 
        console.log(`Quinta-feira`)
        
    case 5: 
        console.log(`Sexta-feira`)
        
    case 6: 
        console.log(`Sábado`)
        
    default:
        console.log(`[ERRO] Dia inválido.`)
        break
}
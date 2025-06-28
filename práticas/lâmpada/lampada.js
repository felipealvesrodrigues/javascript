const turnOn = document.getElementById('turnOn');
const lamp = document.getElementById('lamp');

turnOn.addEventListener ('click', lampOn);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken)

function lampOff (){
     return lamp.src.indexOf ('ligada') == 1 
}

function isLampBroken() {
    return lamp.src.indexOf ('quebrada') == -1 
}

function lampBroken() {
    if ( isLampBroken() ){ //Se quebrada não existir, então pode ligar
        lamp.src = './img/quebrada.jpg';
    }
}

function lampOn() {
    if ( !lampOff()) {
        lamp.src = './img/desligada.jpg'
    }
    if ( isLampBroken() ){
        lamp.src = './img/ligada.jpg';
    }
}

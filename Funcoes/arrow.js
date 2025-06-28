function subtracao(a, b) {
    return a - b;
}

const subtracao2 = (a, b) => a - b;


function somar (a) {
    return a + 2;
}

const somar2 = a => a + 2;

function diaDoMes() {
    return new Date().getDate();
}

function superFuncao(a, b) {
    let sub = a - b;
    sub -= 2;
    let diaDoMes = new Date().getDate();
    return diaDoMes;
}

const superFuncao2 = (a, b) => {
    let sub = a - b;
    sub -= 2;
    let diaDoMes = new Date().getDate();
    return diaDoMes;
}



const diaDoMes2 = () => new Date().getDate();

console.log(superFuncao2())

 
//Primer funcion:
function primerF() {
console.log(true)
};
primerF();

//Funcion asincronica , return "mensaje" luego de 5 seg:
function Asincronica () {
    setTimeout(() => {
    console.log( 'Hola soy una promesa')
    }, 5000);
};
Asincronica()

//Funcion generadora de index pares automatica:
function* generar() {
    let id = 0;
    while(true) {
    id++ 
    if (id % 2 ===0)
    yield id;
    }
}

const gen = generar();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

/*2. Loop de impares con palabra
Debés crear una función llamada loopDeImpares que reciba como parámetro un
número y una palabra y haga un loop de 0 a 100, mostrando en la consola cada
número del loop.
Ahora, modificá el código para que, en caso de que ese número sumado con el
número pasado por parámetro sea impar, muestre en la consola la palabra pasada por
parámetro. */

function LoopDeImpares(numero,string){
let suma= []
    for( let i =0; i<= 100; i++){
    console.log(i);
    suma = i;
    let res = suma + numero;
        if( res % 2 !==0){
        console.log(`${string}`)
        }
    }
}
LoopDeImpares(10,"impar")
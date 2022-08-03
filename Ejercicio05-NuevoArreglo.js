/*5. Nuevo Arreglo
Debés crear una función llamada `nuevoArreglo` que reciba un número como
parámetro y que devuelva un nuevo arreglo con tantos elementos como el número
que le hayas pasado.*/

function nuevoarreglo(number){
    let nuevoarreglo2=[];
    for( let i =1; i<=number;i++){
    nuevoarreglo2.push(i);
    }
    return nuevoarreglo2;
    }
    console.log(nuevoarreglo(10));

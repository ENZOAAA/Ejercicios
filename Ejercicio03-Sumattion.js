/*3. Sumatoria
Debés crear una función llamada `sumattion` que reciba un número como
parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese
mismo.
Ejemplo:
- sumattion(3) debe retornar 6 porque hace (1 +2 +3)
- sumattion(8) debe retornar 36 */

function Sumattion(number){
let suma= number;
for( let i =0; i<number; i++){
suma += i;
}
return suma
}
console.log(Sumattion(8));
/*19. Palíndromo
Deben crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no, debe retornar true en el caso que sea, y false en el caso que no.
*/
function palindromeChecker(str) {
const strReversed = str.split("").reverse().join("");

return strReversed === str ? "es palindromo" : "no es palindromo";
}
console.log(palindromeChecker("neuquen")); 
console.log(palindromeChecker("hola"));
console.log(palindromeChecker("rotor"));
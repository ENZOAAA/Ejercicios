/*21. Consecutivos similares
Debes crear una función llamada “consecutivosSimilares” que reciba un string y retorne cuantos consecutivos similares hay en un string. 
*/


function consecutivosSimilares(palabra){
    let letraActual = palabra;
    let consecutivos = 0;
    
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === letraActual) {
        consecutivos++;
        } else {
        letraActual = palabra[i];
        }
    }
    return consecutivos;
    }
    
    console.log(consecutivosSimilares("AABB"))